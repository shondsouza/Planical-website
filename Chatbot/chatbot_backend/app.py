import os
from dotenv import load_dotenv
from langchain_groq import ChatGroq
from langchain_huggingface import HuggingFaceEmbeddings
from langchain_community.document_loaders import PyPDFLoader, DirectoryLoader
from langchain_chroma import Chroma
from langchain.chains import RetrievalQA
from langchain.prompts import PromptTemplate
from langchain.text_splitter import RecursiveCharacterTextSplitter
from fastapi import FastAPI, Request
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import JSONResponse, Response

# Load environment variables
load_dotenv()

GROQ_API_KEY = os.getenv("GROQ_API_KEY")
CHROMA_DB_PATH = os.getenv("CHROMA_DB_PATH", "./chroma_db")
DATA_PATH = os.getenv("DATA_PATH", "./data")

# Ensure API key is provided
if not GROQ_API_KEY:
    raise ValueError("Missing GROQ_API_KEY. Please add it to a .env file.")

# Initialize LLM
def initialize_llm():
    return ChatGroq(
        temperature=0,
        groq_api_key=GROQ_API_KEY,
        model_name="llama-3.3-70b-versatile"
    )

# Create or load vector database
def create_vector_db():
    if not os.path.exists(DATA_PATH):
        os.makedirs(DATA_PATH)

    loader = DirectoryLoader(DATA_PATH, glob="*.pdf", loader_cls=PyPDFLoader)
    documents = loader.load()
    
    text_splitter = RecursiveCharacterTextSplitter(chunk_size=500, chunk_overlap=50)
    texts = text_splitter.split_documents(documents)
    
    embeddings = HuggingFaceEmbeddings(model_name="sentence-transformers/all-MiniLM-L6-v2")
    vector_db = Chroma.from_documents(texts, embeddings, persist_directory=CHROMA_DB_PATH)
    vector_db.persist()
    
    print("✅ ChromaDB created and data saved")
    return vector_db

# Initialize database
if not os.path.exists(CHROMA_DB_PATH):
    vector_db = create_vector_db()
else:
    embeddings = HuggingFaceEmbeddings(model_name="sentence-transformers/all-MiniLM-L6-v2")
    vector_db = Chroma(persist_directory=CHROMA_DB_PATH, embedding_function=embeddings)

# Setup QA chain
def setup_qa_chain(vector_db, llm):
    retriever = vector_db.as_retriever()
    
    prompt_template = """
    You are a compassionate mental health chatbot powered by Planical AI. Respond thoughtfully to the following question:
    {context}

    User: {question}
    Chatbot:
    """
    
    PROMPT = PromptTemplate(template=prompt_template, input_variables=["context", "question"])
    
    return RetrievalQA.from_chain_type(
        llm=llm,
        chain_type="stuff",
        retriever=retriever,
        chain_type_kwargs={"prompt": PROMPT}
    )

llm = initialize_llm()
qa_chain = setup_qa_chain(vector_db, llm)

# FastAPI setup
app = FastAPI()

# Updated CORS configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://127.0.0.1:3000", 
        "http://localhost:3001",
        "http://127.0.0.1:3001"
    ],
    allow_credentials=True,
    allow_methods=["GET", "POST", "OPTIONS"],
    allow_headers=["Content-Type", "Authorization", "Accept"],
)

# Add static file serving for images
os.makedirs("./images", exist_ok=True)
app.mount("/images", StaticFiles(directory="./images"), name="images")

# Add OPTIONS endpoint for CORS preflight requests
@app.options("/chat")
async def options_chat():
    return Response(status_code=204)

class ChatRequest(BaseModel):
    message: str

@app.post("/chat")
def chat(request: ChatRequest):
    try:
        response = qa_chain.run(request.message)
        return JSONResponse(content={"response": response})
    except Exception as e:
        print(f"Error processing request: {e}")
        return JSONResponse(content={"response": "I'm sorry, I encountered an error processing your request."}, status_code=500)

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)

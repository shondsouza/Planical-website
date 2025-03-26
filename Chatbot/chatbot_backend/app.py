import os
from dotenv import load_dotenv
from langchain_groq import ChatGroq
from langchain_huggingface import HuggingFaceEmbeddings
from langchain_community.document_loaders import PyPDFLoader, DirectoryLoader
from langchain_chroma import Chroma
from langchain.chains import RetrievalQA
from langchain.prompts import PromptTemplate
from langchain.text_splitter import RecursiveCharacterTextSplitter
from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware


load_dotenv()

GROQ_API_KEY = os.getenv("GROQ_API_KEY")
CHROMA_DB_PATH = os.getenv("CHROMA_DB_PATH")
DATA_PATH = os.getenv("DATA_PATH")

# Load environment variables
load_dotenv()
GROQ_API_KEY = os.getenv("GROQ_API_KEY")

# Ensure API key is provided
if not GROQ_API_KEY:
    raise ValueError("Missing GROQ_API_KEY. Please add it to a .env file.")

# Initialize LLM
def initialize_llm():
    return ChatGroq(
        temperature=0,
        groq_api_key=GROQ_API_KEY,  # Use the environment variable
        model_name="llama-3.3-70b-versatile"
    )


# Create or load vector database
DATA_PATH = "./data"
DB_PATH = "./chroma_db"

def create_vector_db():
    if not os.path.exists(DATA_PATH):
        os.makedirs(DATA_PATH)

    loader = DirectoryLoader(DATA_PATH, glob="*.pdf", loader_cls=PyPDFLoader)
    documents = loader.load()
    
    text_splitter = RecursiveCharacterTextSplitter(chunk_size=500, chunk_overlap=50)
    texts = text_splitter.split_documents(documents)
    
    embeddings = HuggingFaceEmbeddings(model_name="sentence-transformers/all-MiniLM-L6-v2")
    vector_db = Chroma.from_documents(texts, embeddings, persist_directory=DB_PATH)
    vector_db.persist()
    
    print("✅ ChromaDB created and data saved")
    return vector_db

# Initialize database
if not os.path.exists(DB_PATH):
    vector_db = create_vector_db()
else:
    embeddings = HuggingFaceEmbeddings(model_name="sentence-transformers/all-MiniLM-L6-v2")
    vector_db = Chroma(persist_directory=DB_PATH, embedding_function=embeddings)

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

# Chatbot response function
def chatbot_response(message, history):
    if not message.strip():
        return "⚠️ Please enter a valid message."
    
    response = qa_chain.run(message)
    return response

# Gradio Interface
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3001"],  # Adjust for production
    allow_credentials=True,
    allow_methods=["*"],  # Allow all HTTP methods
    allow_headers=["*"],  # Allow all headers
)

class ChatRequest(BaseModel):
    message: str

@app.post("/chat")
def chat(request: ChatRequest):
    response = qa_chain.run(request.message)  # Now uses chatbot logic
    return {"response": response}


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)

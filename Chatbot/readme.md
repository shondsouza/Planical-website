
##  About

A modern, responsive mental health chatbot powered by Planical AI, featuring a beautiful user interface and advanced language model capabilities.

## Tech Stack
 ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) 
 ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
 ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
 ![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54) 
 ![FastAPI](https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi) 
 ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) 
 ![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)
 ![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)



## How to Build the App

1. Fork and Clone the repository to your local machine
```bash
git clone https://github.com/shondsouza/Planical.git
cd chatbot
```

2. Install backend dependencies:
```bash
cd chatbot_backend
pip install -r requirements.txt
```

3. Set up environment variables:
Create a `.env` file in the `chatbot_backend` directory with:
```
GROQ_API_KEY=your_groq_api_key
CHROMA_DB_PATH="./chroma_db"
DATA_PATH="./data"
```

4. Install frontend dependencies:
```bash
cd ../chatbot
npm install
```

## Running the Application

1. Start the backend server:
```bash
cd chatbot_backend
python app.py
```

2. Start the frontend server:
```bash
cd chatbot
npm start
```

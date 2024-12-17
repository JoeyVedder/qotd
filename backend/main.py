from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from question_fetcher import fetch_random_question

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {"message": "Welcome to the Question of the Day generator!"}

@app.get("/question")
def get_question():
    return fetch_random_question()
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.database import test_connection

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials = True,
    allow_methods = ["*"],
    allow_headers = ["*"],
)

@app.get("/")
def home():
    return {
        "message": "Hola Mundo"
    }

@app.get("/db-test")
def db_test():
    
    result = test_connection()

    return {
        "message": "Datos de BD",
        "result": result
    }

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.config import settings
from app.database import test_connection

app = FastAPI(
    title = "Download Music API",
    version = "1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.cors_origins,
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

from datetime import datetime, timedelta, timezone
from jose import jwt 
from app.config import settings
from passlib.context import CryptContext

SECRET_KEY = settings.db_secret_key
ALGORITHM = settings.db_algorithm
ACCESS_TOKEN_EXPIRE_MINUTES = settings.db_access_token_expire_minutes

pwd_context = CryptContext(
    schemes = ["bcrypt"],
    deprecated = "auto"
)

def hash_password(password: str)-> str:
    return pwd_context.hash(password)

def verify_password(plain_password: str ,password_hash: str) ->bool:
    return pwd_context.verify(plain_password, password_hash)

def create_access_token(data: dict):
    to_encode = data.copy()

    expire = datetime.now(timezone.utc) + 
        timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)

    to_encode.update({"exp": expire})

    return jwt.encode(
        to_encode,
        SECRET_KEY,
        algorithm = ALGORITHM

    )
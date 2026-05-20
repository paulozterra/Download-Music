from sqlalchemy import Column, Integer, String, Text, DateTime
from sqlalchemy.sql import func

from app.database import Base

class Users(Base):
    __tablename__ = "users"

    id = Column(Integer, 
        primary_key = True, 
        index = True)

    username = Column(String(100), 
        nullable = False)

    email = Column(String(150), 
        unique = True, 
        nullable = False)

    password_hash = Column(Text, 
        nullable = False)

    password_algorithm = Column(String(30),
        server_default = "bcrypt",
        nullable = False)

    created_at = Column(DateTime, 
        server_default = func.now())
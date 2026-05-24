from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from app.database import get_db
from app.models.users import Users
from app.schemas.auth_schema import UserRegister, UserLogin, TokenResponse
from app.core.security import hash_password, verify_password, create_access_token

router = APIRouter(
    prefix="/auth",
    tags=["Auth"]
)

@router.post("/register",
    status_code=status.HTTP_201_CREATED)
def register(user_data: UserRegister, db: Session = Depends(get_db)):
    user_exists = db.query(Users).filter(
            Users.email == user_data.email
        ).first()
    
    if user_exists: 
        raise HTTPException(
            Status_code = status.HTTP_400_BAD_REQUEST,
            detail = "El email ya se encuentra registrado"
        )

    new_user = Users(
        username = user_data.username,
        email = user_data.email,
        password_hash = hash_password(user_data.password)
    )

    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    return {
        "message": "Usuario registrado correctamente",
        "user_id": new_user.id,
        "email": new_user.email
    }


@router.post("/login", response_model=TokenResponse)
def login(user_data: UserLogin, db: Session = Depends(get_db)):
    user = db.query(Users).filter(
        Users.email == user_data.email
    ).first()

    if not user:
        raise HTTPException(
            status_code = status.HTTP_401_UNAUTHORIZED,
            detail = "Credenciales incorrectas"
        )

    if not verify_password(user_data.password, user.password_hash):
        raise HTTPException(
            status_code = status.HTTP_401_UNAUTHORIZED,
            detail = "Credenciales incorrectas"
        )

    access_token = create_access_token(
        data = {
            "sub": user.email,
            "user_id": user.id
        }
    )

    return {
        "access_token": access_token,
        "token_type": "bearer"
    }
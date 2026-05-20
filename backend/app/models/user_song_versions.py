from sqlalchemy import UniqueConstraint, ForeignKey, Column, Integer, Text, Bool, DateTime
from sqalchemy import func

from app.database import Base

class UserSongVersions(Base):
    __tablename__ = "user_song_versions"

    id = Column(Integer, 
        primary_key = True, 
        index = True)

    user_id = Column(Integer, 
        ForeignKey("users.id", ondelete = "CASCADE"), 
        nullable = False)

    song_version_id = Column(Integer,
        ForeignKey("song_versions.id", ondelete = "CASCADE"), 
        nullable = False )

    search_query = Column(Text)

    user_custom_name = Column(Text)

    is_favorite = Column(Bool, 
        server_default = False )

    created_at = Column(DateTime, 
        server_default = func.now())

    __table_args__ = (UniqueConstraint(
        "users.id", 
        "song_versions.id",
        name = "uq_user_song"
    ),
    )

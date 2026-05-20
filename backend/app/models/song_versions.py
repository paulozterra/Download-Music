from sqlalchemy import Column, String, Text, Integer, DateTime 
from sqlalchemy import func

from app.database import Base

class SongVersions(Base):
    __tablename__ = "song_versions"

    id = Column(Integer, 
        primary_key = True, 
        index = True)

    youtube_video_id = Column(String(50), 
        unique = True, 
        nullable = False)

    original_title = Column(Text, 
        nullable = False)

    normalized_title = Column(Text, 
        nullable = False, 
        index = True)

    artist = Column(Text)

    song_title = Column(Text)

    file_path = Column(Text)

    file_name = Column(Text)

    duration_seconds = Column(Integer)

    format_song = Column(String(20), 
        server_default = "mp3")

    quality = Column(String(50))

    created_at = Column(DateTime, 
        server_default = func.now()) 
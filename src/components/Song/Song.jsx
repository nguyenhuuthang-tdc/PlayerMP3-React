import React from 'react'
import './Song.css'

export default function Song({ song, currentSongId, setCurrentIndex, handleSelectSong }) {
  return (
    <div>
        <div className={currentSongId === song.id ? "song active" : "song"}>
          <div className="thumb" style={{ backgroundImage: `url('${song.image}')` }}>
          </div>
          <div className="body" onClick={() => handleSelectSong(song.id)}>
              <h3 className="title">{ song.name }</h3>
              <p className="author">{ song.singer }</p>
          </div>
          <div className="option">
              <i className="fa fa-ellipsis-h"></i>
          </div>
        </div>
    </div>
  )
}

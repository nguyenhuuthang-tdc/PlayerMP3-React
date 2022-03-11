import React from 'react'
import './ListSong.css'
import Song from '../Song/Song'

export default function ListSong({ listSong, currentSongId, handleSelectSong }) {
  return (
    <div>
        <div className="playlist">
          {
            listSong.map((song) => <Song key={song.id} song={song} currentSongId={currentSongId} handleSelectSong={handleSelectSong} />)
          }
        </div>
    </div>
  )
}

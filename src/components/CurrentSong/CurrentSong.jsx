import React from 'react'
import './CurrentSong.css'

export default function CurrentSong({ currentSong }) {
  return (
    <div>
        <header>
            <h4>Now playing:</h4>
            <h2>{ currentSong.name }</h2>
        </header>
        <div className="cd">
            <div className="cd-thumb" style={{ backgroundImage: `url("${currentSong.image}")` }}></div>
        </div>
    </div>
  )
}

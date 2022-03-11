import React from 'react'
import './ControlBar.css'

export default function ControlBar({ 
  handlePlaying, 
  isPlaying,
  isRepeat,
  handleNextSong, 
  handlePrevSong, 
  currentPercent, 
  handleOnChange, 
  handleRepeat, 
  isRandom, 
  handleRandom 
}) {
  return (
    <div>
        <div className="control">
      <div className={isRepeat ? "btn btn-repeat active" : "btn btn-repeat"} onClick={handleRepeat}>
        <i className="fa fa-repeat"></i>
      </div>
      <div className="btn btn-prev" onClick={handlePrevSong}>
        <i className="fa fa-step-backward"></i>
      </div>
      <div className="btn btn-toggle-play" onClick={handlePlaying}>
        {
          isPlaying ? <i className="fa fa-pause" aria-hidden="true"></i> : <i className="fa fa-play icon-play"></i>
        }
      </div>
      <div className="btn btn-next" onClick={handleNextSong}>
        <i className="fa fa-step-forward"></i>
      </div>
      <div className={isRandom ? "btn btn-random active" : "btn btn-random"} onClick={handleRandom}>
        <i className="fa fa-random"></i>
      </div>
    </div>
    <input className="progress" type="range" step="1" min="0" max="100" value={currentPercent} onChange={(e) => handleOnChange(e.target.value)}/>
    </div>
  )
}

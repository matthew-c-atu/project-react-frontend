import './Transport.css'
import { useState } from 'react'

// import Transport from './Transport.jsx'


const playUrl = "https://pluspng.com/img-png/play-button-png-play-button-icon-png-image-18904-512.png"
const pauseUrl = "https://i.pinimg.com/originals/e5/96/0e/e5960e813b505af997f745cd5f5e23e9.png"
const seekForwardUrl = "http://icons.iconarchive.com/icons/icons8/windows-8/512/Media-Controls-Fast-Forward-icon.png"
const seekBackwardUrl = "https://cdn0.iconfinder.com/data/icons/playback-1/24/rewind-512.png"

const playFilepath = "./assets/play.png"

export default function Transport() {

const [playing, setPlaying] = useState(false)
const [currentPlayIcon, setCurrentPlayIcon] = useState(playUrl)

const handlePlayClick = () => {
  if (!playing) {
    setPlaying(true);
    setCurrentPlayIcon(pauseUrl);
    console.log("Playing...")
  }
  else {
    setPlaying(false);
    setCurrentPlayIcon(playUrl);
    console.log("Pausing...")
  }
    // TODO: Add more stuff
}

const handleSeekBackwardClick = () => {
  if (playing) {
    setPlaying(false);
  }
  console.log("Seeking Backward...")
    // TODO: Add more stuff
}

const handleSeekForwardClick = () => {
  if (playing) {
    setPlaying(false);
  }
  console.log("Seeking Forward...")
    // TODO: Add more stuff
}

const handleSeekMove = () => {
    console.log("Seekbar Value:", document.getElementById("seekBar").value)
    // TODO: Add more stuff
}

  return (
    <>
      <div className="transportBg">

      <div className="grid-container">

          <div className="grid-item-seek-back">
            <button type="button" className="btn btn-primary" onClick={handleSeekBackwardClick}>
              <img src={seekBackwardUrl} className="transportButton round" alt="seek backward button"/>
            </button>
          </div>

          <div className="grid-item-play">
            <button className="btn btn-primary" alt="play button" onClick={handlePlayClick}>
              <img src={currentPlayIcon} className="transportButton round"/>
            </button>
          </div>

          <div className="grid-item-seek-forward">
            <button type="button" className="btn btn-primary" onClick={handleSeekForwardClick}>
              <img src={seekForwardUrl} className="transportButton round" alt="seek forward button"/>
            </button>
          </div>

          <div className="grid-item-seek-bar">
            <div className="slideContainer">
              <input type="range" min="1" max="100" step="0.2" defaultValue="1" className="slider" id="seekBar" onInput={handleSeekMove}/>
            </div>
          </div>

      </div>

    </div>
    </>
  )
}


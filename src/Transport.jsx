import './Transport.css'
import { useState, useEffect } from 'react'
import Hls from "hls.js"

const playUrl = "https://pluspng.com/img-png/play-button-png-play-button-icon-png-image-18904-512.png"
const pauseUrl = "https://i.pinimg.com/originals/e5/96/0e/e5960e813b505af997f745cd5f5e23e9.png"
const seekForwardUrl = "http://icons.iconarchive.com/icons/icons8/windows-8/512/Media-Controls-Fast-Forward-icon.png"
const seekBackwardUrl = "https://cdn0.iconfinder.com/data/icons/playback-1/24/rewind-512.png"

var hlsPlaylist="http://localhost:9001/Binary%20-%20Symptome.m3u8"
// var hlsPlaylist="http://localhost:8080/hls/Binary%20-%20Symptome.m3u8"


const playFilepath = "./assets/play.png"

export default function Transport({currentSong}) {

const [playing, setPlaying] = useState(false)
const [currentPlayIcon, setCurrentPlayIcon] = useState(playUrl)

const togglePlaying = (val) => {
    setPlaying(current => val);
  }

const handlePlayClick = () => {
  var audio = document.getElementById('hlsAudio');
  if (!playing) {
    togglePlaying(true);
    setCurrentPlayIcon(pauseUrl);
    console.log("Playing...")
    console.log("playing is:", playing)
    audio.play();
    console.log(audio.duration)
  }
  else {
    togglePlaying(false);
    setCurrentPlayIcon(playUrl);
    console.log("Pausing...")
    audio.pause();
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

const handleSeekMouseDown = () => {
    var audio = document.getElementById('hlsAudio');
    audio.pause();
    setPlaying(false);
}
const handleSeekMouseUp = () => {
    var audio = document.getElementById('hlsAudio');
    var seekbar = document.getElementById("seekBar");
    console.log("GOING TO NEW POSITION (Value is", seekbar.value, ")");
    audio.currentTime = (audio.duration / 100) * seekbar.value;
    console.log("AUDIO CURENTTIME IS", audio.currentTime);
    setPlaying(true);
    audio.play();
    handlePlayClick();
}

  const playOnLoad = () => {
    var audio = document.getElementById('hlsAudio');
    togglePlaying(true);
    setCurrentPlayIcon(pauseUrl);
    audio.play();
  }

const handleSeekMove = () => {
    var audio = document.getElementById('hlsAudio');
    console.log("Seekbar Value:", document.getElementById("seekBar").value);
}

const autoScrollSeek = () => {
      var audio = document.getElementById('hlsAudio');
      var seekbar = document.getElementById("seekBar");
      var newVal = (audio.currentTime / audio.duration) * 100;
      console.log("Updating seek bar to", newVal, "...");
      seekbar.value = newVal;
  }

// TODO: some kind of task manager for intervalIds to ensure there's never more than one?
const startAutoScroll = () => {
      var autoScrollIntervalId = setInterval(() => {
        var audio = document.getElementById('hlsAudio');
        console.log("updating...", "playing ==", !audio.paused)
        if (!audio.paused) {
          autoScrollSeek();
        } else {
          console.log("clearing interval id ", autoScrollIntervalId)
          clearInterval(autoScrollIntervalId);
        }
    }, 100);
}

const loadHls = (songUrl) => {
    var audio = document.getElementById('hlsAudio');
    if (Hls.isSupported()) {
    var hls = new Hls();
    hls.on(Hls.Events.MEDIA_ATTACHED, function () {
      console.log('audio and hls.js are now bound together !');
    });
    hls.on(Hls.Events.MANIFEST_PARSED, function (event, data) {
      console.log(
        'manifest loaded, found ' + data.levels.length + ' quality level',
      );
    });
    hls.loadSource(songUrl);
    // bind them together
    hls.attachMedia(audio);
  }}

useEffect(() => {
  console.log("REACT RE-RENDERING...")
  // loadHls();
},[]);

useEffect(() => {
  console.log("playing is: ", playing)
},[playing]);

useEffect(() => {
    loadHls(currentSong);
    playOnLoad();
},[currentSong]);

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
              <input type="range" min="1" max="100" step="0.2" defaultValue="1" className="slider" id="seekBar" onMouseDown={handleSeekMouseDown} onInput={handleSeekMove} onMouseUp={handleSeekMouseUp}/>
            </div>
          </div>

          <video id="hlsAudio" hidden={true} onPlay={startAutoScroll}></video>

      </div>

    </div>
    </>
  )
}


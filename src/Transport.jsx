import './Transport.css'
import playButtonImg from './img/play-button.jpg'
import pauseButtonImg from './img/pause-button.png'
import { useState, useEffect } from 'react'
import Hls from "hls.js"

const seekForwardUrl = "http://icons.iconarchive.com/icons/icons8/windows-8/512/Media-Controls-Fast-Forward-icon.png"
const seekBackwardUrl = "https://cdn0.iconfinder.com/data/icons/playback-1/24/rewind-512.png"

const playFilepath = "./assets/play.png"

export default function Transport({currentSongUrl, currentSongName}) {

const [playing, setPlaying] = useState(false)
const [currentPlayIcon, setCurrentPlayIcon] = useState(pauseButtonImg);

const togglePlaying = (val) => {
    setPlaying(current => val);
  }

const handlePlayClick = () => {
  var audio = document.getElementById('hlsAudio');
  if (audio.paused) {
    togglePlaying(true);
    setCurrentPlayIcon(pauseButtonImg);
    console.log("Playing...")
    console.log("playing is:", playing)
    audio.play();
    console.log(audio.duration)
  }
  else {
    togglePlaying(false);
    setCurrentPlayIcon(playButtonImg);
    console.log("Pausing...")
    audio.pause();
  }
    // TODO: Add more stuff
}

const handlePlayChange = () => {
  var audio = document.getElementById('hlsAudio');
  // Play the audio
  if (!playing) {
    setPlaying(true)
    setCurrentPlayIcon(pauseButtonImg);
    audio.play();
  }
  // Pause the audio
  else {
    setPlaying(false)
    setCurrentPlayIcon(playButtonImg);
    audio.pause();
  }
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
    console.log("GOING TOwNEW POSITION (Value is", seekbar.value, ")");
    audio.currentTime = (audio.duration / 100) * seekbar.value;
    console.log("AUDIO CURRENTTIME IS", audio.currentTime);
    // setPlaying(true);
    // audio.play();
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
    // syncPlayIcon()
},[playing]);

useEffect(() => {
    loadHls(currentSongUrl);
},[currentSongUrl]);


  return (
    <>
      <div className="transportBg">

      <div className="grid-container">

          <div className="grid-item-seek-back">
            <button type="button" className="buttonBg" onClick={handleSeekBackwardClick}>
              <img src={seekBackwardUrl} className="transportButton round" alt="seek backward button"/>
            </button>
          </div>

          <div className="grid-item-play">
            <button className="buttonBg" alt="play button" onClick={handlePlayClick}>
              <img src={currentPlayIcon} className="transportButton round"/>
            </button>
          </div>

          <div className="grid-item-seek-forward">
            <button type="button" className="buttonBg" onClick={handleSeekForwardClick}>
              <img src={seekForwardUrl} className="transportButton round" alt="seek forward button"/>
            </button>
          </div>

          <div className="grid-item-seek-bar">
            <div className="slideContainer">
              <input type="range" min="1" max="100" step="0.2" defaultValue="1" className="slider" id="seekBar" onMouseDown={handleSeekMouseDown} onInput={handleSeekMove} onMouseUp={handleSeekMouseUp}/>
            </div>
          </div>

          <div className="nowPlayingText grid-item-now-playing">
            Now Playing:
          </div>

          <div className="nowPlaying nowPlayingText grid-item-now-playing-name">
            {currentSongName}
          </div>

          <video id="hlsAudio" hidden={true} autoPlay onPlay={startAutoScroll}></video>
          

      </div>

    </div>
    </>
  )
}


import './App.css'
import Transport from './Transport'
import Results from './Results'
import Search from './Search'
import {useState} from 'react';

// import Transport from './Transport.jsx'

const playerLogo = "https://image.similarpng.com/very-thumbnail/2020/12/Popular-Music-icon-in-round-black-color-on-transparent-background-PNG.png" 

export default function App() {

const passFoo = (val) => {
  console.log(val)
  }

const setFooHandler = (val) => {
    setFoo(f => val)
  }

const setSongsHandler = (obj) => {
  console.log("Trying to set songs...")
  console.log(obj)
  if (obj != null) {
    setSongs(s => obj)
    }
}

const updateCurrentSongHandler = (val) => {
    setCurrentSong(s => val)
}

  const [songs, setSongs] = useState([]);
  const [foo, setFoo] = useState("");
  const [currentSong, setCurrentSong] = useState("");
  return (
    <>
      <Search 
        fooState={foo}
        updateSongsHandler={setSongsHandler}
        passFooHandler={passFoo}
        setFooHandler={setFooHandler}
      />
      <Results 
        songs={songs}
        updateCurrentSongHandler={updateCurrentSongHandler}
      />
      <Transport 
        currentSong={currentSong}
      />

    </>
  )
}

function HelloText() {
  return (
    <h1>Hello</h1> 
  )
}

function GetAudioData() {
 console.log("foo")
  fetch( "http://localhost:8080",
    {
      method: "GET"
    }
  ).then((response) => console.log(response))
}

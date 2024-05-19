import './App.css'
import Transport from './Transport'
import Results from './Results'
import Search from './Search'
import {useState} from 'react';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

export default function App() {

const setSongsHandler = (obj) => {
  if (obj != null) {
    setSongs(s => obj)
    }
}

const updateCurrentSongUrlHandler = (val) => {
    setCurrentSongUrl(s => val)
}

const updateCurrentSongNameHandler = (val) => {
    setCurrentSongName(s => val)
}

  const [songs, setSongs] = useState([]);
  const [currentSongUrl, setCurrentSongUrl] = useState("");
  const [currentSongName, setCurrentSongName] = useState("");

  return (
    <>
      <div className="bg-image">
      <Search 
        setSongsHandler={setSongsHandler}
      />
      <Results 
        songs={songs}
        updateCurrentSongUrlHandler={updateCurrentSongUrlHandler}
        updateCurrentSongNameHandler={updateCurrentSongNameHandler}
      />
      <Transport 
        currentSongUrl={currentSongUrl}
        currentSongName={currentSongName}
      />
    </div>
    </>
  )
}

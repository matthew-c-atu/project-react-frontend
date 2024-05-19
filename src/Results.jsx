import './Results.css'
import 'react'
import { useEffect } from 'react'

export default function Results({songs, updateCurrentSongUrlHandler, updateCurrentSongNameHandler}) {
  const loadSong = (url, name) => {
    console.log("Loading " + url)
    updateCurrentSongUrlHandler(url)
    updateCurrentSongNameHandler(name)
  } 

  const renderList = () => {
    console.log("here's your songs, fool")
    songs.forEach(song => {

      console.log(song["Name"]);
    });
  }

  const songList = songs.map(song => 
    <li className="parent" key={song["Id"]} onClick={() => loadSong(song["Url"], song["Name"])}>
      <div className="nested songName">{song["Name"]}</div>
      <div className="nested genreName">{song["Genre"]}</div>
    </li>
  );

  useEffect(() => {
    renderList(); 
  },[songs]);

  return(
  <>
    <div className="resultsBg">
      <div className="resultsContainer">
        <ol>{songList}</ol>
      </div>
    </div>
  </>
  )
      
}

import './Results.css'
import 'react'
import { useEffect } from 'react'

export default function Results({songs, updateCurrentSongHandler}) {

  // make GET request to DB localhost:9002/songs
  // provide some way of returning a list of divs in the return statement
  const loadSong = (url) => {
    console.log("Loading " + url)
    updateCurrentSongHandler(url)
  } 

  const songList = songs.map(song => 
    <li className="parent" key={song["Id"]} onClick={() => loadSong(song["Url"])}>
      <div className="nested songName">{song["Name"]}</div>
      <div className="nested genreName">{song["Genre"]}</div>
    </li>
  );
  const renderList = () => {
    console.log("here's your songs, fool")
    songs.forEach(song => {

      console.log(song["Name"]);
    });
    // songList

  }

  // const songArray = songs
  //
  // const listItems = songArray.map(song => <li>{song}</li>);

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

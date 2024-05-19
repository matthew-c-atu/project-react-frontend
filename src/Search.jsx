import './Search.css'
import {useState} from 'react'
import { useEffect } from 'react'

export default function Search({setSongsHandler}) {
  
  var databaseSearchUrl = "http://localhost:9002/search"

  const genres = [ "Drum and Bass", "House" ]
  const queryDatabase = (query) => {

    const response = fetch(databaseSearchUrl + "?" + new URLSearchParams({name:query, genre:searchGenre}), {
      method: "GET",
    })
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      setSongsHandler(json);
    }
    );
  }

  const handleSearchClick = () => {
    console.log("Search query executed.")
    const text = document.getElementById("searchTextBox");
    queryDatabase(text.value);
    text.value = "";
  }

  const handleTextSubmit = (event) => {
    console.log('handleSubmit ran');
    event.preventDefault(); 

    const text = document.getElementById("searchTextBox");
    queryDatabase(text.value);
    text.value = "";

  };

  const handleDynamicSearch = (event) => {
    event.preventDefault(); 

    const text = document.getElementById("searchTextBox");
    queryDatabase(text.value);

  };

  const handleChangeGenre = (genre) => {
    console.log(genre);
    setSearchGenre(g => genre);
  }

  const handleClearGenre = () => {
    setSearchGenre(g => "");
  }

  const genreList = genres.map(genre => 
    <li className="parent" onClick={() => handleChangeGenre(genre)}>
      {genre}
    </li>
  );

  useEffect(() => {
    queryDatabase("")
  },[]);

  const [searchGenre, setSearchGenre] = useState("");

  return (
    <>
      <div className="searchBg">

        <div className="grid-container">

        <div>

            <div class="dropdown grid-item-search-genre">
              <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  Genre
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li className="parent" onClick={() => handleClearGenre()}>
                  Clear selection
                </li>
                  {genreList}
              </ul>
            </div>

          <div className="searchGenre grid-item-search-genre-text">
            {searchGenre}
          </div>

        </div>


          <form onSubmit={handleTextSubmit} id="songNameForm" className="grid-item-search-box">
          <input onKeyUpCapture={handleDynamicSearch} id="searchTextBox" type="text" name="name" className="searchInput grid-item-search-box" />
          </form>

          <div className="grid-item-search-button">
            <button onClick={handleSearchClick} className="searchButton">
              Search
            </button> 
          </div>

        </div>
      </div>
    </>
  )
}

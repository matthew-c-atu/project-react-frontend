import './Search.css'
import {useState} from 'react'

export default function Search({fooState, updateSongsHandler, passFooHandler, setFooHandler}) {
  const searchUrl = "https://icon-library.com/images/search-icon-png/search-icon-png-24.jpg"
  
  var databaseUrl = "http://localhost:9002"
  var databaseSearchUrl = "http://localhost:9002/search"

  const queryDatabase = (query) => {

    let jsonObj;
    const response = fetch(databaseSearchUrl, {
      method: "GET",
    })
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      jsonObj = json;
      updateSongsHandler(json);
    }
    );

    // console.log(typeof(jsonObj));
    // console.log(jsonObj);

    console.log("HERE IS FOOOOOOOOO")
    passFooHandler("sdkfjksdlfjdskfsdfls")     

    // updateSongsHandler(jsonObj);
    setFooHandler("fooooo")

  }

  // should this function be async?
  const handleSearchClick = (query) => {
    console.log("Search query executed.")
    const text = document.getElementById("searchTextBox");
    text.value = "";
    queryDatabase();
  }

  
  const handleTextSubmit = event => {
    console.log('handleSubmit ran');
    event.preventDefault(); 
    document.getElementById("searchTextBox").value = "";

    queryDatabase();

  };

  return (
    <>
      <div className="searchBg">
        <div className="grid-container">
          <form onSubmit={handleTextSubmit} id="songNameForm" className="grid-item-search-box">
          <input id="searchTextBox" type="text" name="name" className="searchInput grid-item-search-box"/>
          </form>
          <button onClick={handleSearchClick} className="grid-item-search-button">
            <img src={searchUrl} alt="search button" className="searchButton round"/>
          </button> 
        </div>
      </div>
    </>
  )
}
            // <img src={searchUrl} alt="search button" className="searchButton round"/>


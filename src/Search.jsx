import './Search.css'
import {useState} from 'react'

export default function Search() {
  const searchUrl = "https://icon-library.com/images/search-icon-png/search-icon-png-24.jpg"
  
  const handleSearchClick = () => {
    console.log("Search query executed.")
  }
  return (
    <>
      <div className="searchBg">
        <div className="grid-container">
          <input type="text" className="searchInput grid-item-search-box"/>
          <button onClick={handleSearchClick} className="grid-item-search-button">
            <img src={searchUrl} alt="search button" className="searchButton round"/>
          </button> 
        </div>
      </div>
    </>
  )
}


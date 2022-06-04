import React from 'react'
import '../styles/searchbox.css'
/**
* @author
* @function SearchBox
**/

export const SearchBox = ({handleSearch, searchTerm}) => {
  return (
    <div className="search-box">
      <form action="/" method="GET" className="form">
        <div className="search-input">
          <img className="icon" src="images/search.png" />
          <input
            aria-label='search'
            name="search"
            type="search"
            placeholder=""
            className="search-field"
            style={{ paddingLeft: "28px" }}
            value={searchTerm}
            onChange={handleSearch}
            role="textbox"
          />
        </div>
        <button type="submit" className="search-button"></button>
      </form>
    </div>
  );

 }
import React, { useState, useEffect } from 'react'
import { SearchBox } from './SearchBox';
import { Filter } from './Filter';
import { ResultContainer } from './ResultContainer';
import FetchService from '../services/FetchService';
import loading from '../images/loading.gif';
import '../styles/content.css'
/**
* @author teerawat
* @function Content - to provide container for the contene area
**/

export const Content = ({ isNavExpanded }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("All");
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isInputLenOk, setIsInputLenOk] = useState(false);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    console.log("Search term: ", searchTerm);
  };
  const handleFilter = (e) => {
    setFilter(e.target.value);
    console.log("Filter : ", filter);
  };

  // check if the search term > 3 chars perform search
  useEffect(() => {
    let _timerId; // for timer
    if (searchTerm.length >= 3) {
      setIsInputLenOk(true);
      // wait for 1 sec until no more activities to reduce api call
      _timerId = setTimeout(() => {
        setIsLoading(true);
        FetchService.fetchLanguage(searchTerm, filter)
          .then((data) => {
            setResults(data);
            setIsLoading(false);
            console.log(data)
          })
          .catch((e) => console.log("error->", e));
      }, 1000);
    } else {
      setIsInputLenOk(false);
      setResults([]);
    }
    //clean up /cancel timer
    return () => {
      clearTimeout(_timerId);
    };
  }, [searchTerm, filter]);

  return (
    <article>
      <h1 style={{ fontSize: "2rem", textAlign: "center" }}>Search</h1>
      <SearchBox handleSearch={handleSearch} searchTerm={searchTerm} />
      <div id="resultArea">
        <Filter handleFilter={handleFilter} filter={filter} />
        <p style={{ color: "#ff0000" }}>
          {!isInputLenOk && "Please enter at least 3 characters"}
        </p>
        {isLoading && <img src={loading} width="150" height="150" />}
        <ResultContainer results={results} />
      </div>
    </article>
  );
};
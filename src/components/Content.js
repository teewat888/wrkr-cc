import React, { useState, useEffect } from 'react'
import { SearchBox } from './SearchBox';
import { Filter } from './Filter';
import { ResultContainer } from './ResultContainer';
import loading from '../images/loading.gif';
import { ErrorMessage } from './ErrorMessage';
import { getRepo } from '../services/getRepo';
import "../styles/content.css";
/**
* @author teerawat
* @function Content - to provide container for the content area
**/

export const Content = ({ isNavExpanded }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("All");
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isInputLenOk, setIsInputLenOk] = useState(false);
  const [error,setError] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    console.log("Search term: ", searchTerm);
  };
  const handleFilter = (e) => {
    setFilter(e.target.value);
    console.log("Filter : ", filter);
  };

  // monitor search input & filter value
  useEffect(() => {
    let _timerId; // timer handler for debouncing
    setError(""); // reset error message
    if (searchTerm.length >= 3) {
      setIsInputLenOk(true);
      //debounce input for 1 sec
      _timerId = setTimeout(() => {
        setIsLoading(true);
        getRepo(searchTerm, filter)
          .then((data) => {
            setResults(data);
            setIsLoading(false);
            //console.log(data)
          })
          .catch((e) => {
              console.log("error->", e)
              setIsLoading(false);
              setError("Some errors occur, please try again later");
            });
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
    <article className={isNavExpanded ? "back-drop" : ""}>
      <h1 style={{ fontSize: "2rem", textAlign: "center" }}>Search</h1>
      <SearchBox handleSearch={handleSearch} searchTerm={searchTerm} />
      <div id="resultArea">
        <Filter handleFilter={handleFilter} filter={filter} />
        {!isInputLenOk && (
          <ErrorMessage errorMessage="Please enter at least 3 characters" />
        )}
        {error && (
          <ErrorMessage errorMessage={error} />
        )}
        {isLoading && <img src={loading} width="150" height="150" alt="loading" />}
        <ResultContainer results={results} />
      </div>
    </article>
  );
};
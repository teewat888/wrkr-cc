import React, { useState, useEffect } from 'react'
import { SearchBox } from './SearchBox';
import { Filter } from './Filter';
import { ResultContainer } from './ResultContainer';
import FetchService from '../services/FetchService';
/**
* @author
* @function Content - to provide container for the middle search box items
**/

export const Content = (props) => {
    const [searchTerm,setSearchTerm] = useState('');
    const [filter,setFilter] = useState('All');
    const [results,setResults] = useState([]);
    const [isLoading,setIsLoading] = useState(false);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        console.log('Search term: ', searchTerm)
    }
    const handleFilter = (e) => {
        setFilter(e.target.value);
        console.log("Filter : ", filter);
    }

    // check if the search term > 3 chars perform search
    useEffect(() => {
      let tid; // for timer
      if (searchTerm.length >= 3) {
        // wait for 1 sec until no more input to reduce api call
        tid = setTimeout(() => {
          setIsLoading(true);
          FetchService.fetchAll(searchTerm)
            .then((data) => {
              setResults(data);
              setIsLoading(false);
              console.log('data->',data)
            })
            .catch((e) => console.log("error->", e));
        }, 1000);
      }
      //clean up /cancel timer
      return () => {
        clearTimeout(tid);
      };
    }, [searchTerm])

  return (
    <article>
      <h1 style={{ fontSize: "2rem", textAlign: "center" }}>Search</h1>
      <SearchBox handleSearch={handleSearch} searchTerm={searchTerm} />
      <Filter handleFilter={handleFilter} filter={filter} />
      <p style={{ color: "#ff0000" }}>
        {searchTerm.length < 3 ? "Please enter at least 3 characters" : ""}
      </p>
      {isLoading && <img src="images/loading.gif" width="150" height="150" />}
      <ResultContainer results={results} />
    </article>
  );
 }
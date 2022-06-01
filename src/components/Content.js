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
        if(searchTerm.length >= 3) {
            FetchService.fetchAll(searchTerm).then(data => {
                setResults(data);
                console.log("data: ",data)
            }).catch(e => console.log("error->",e))
        }
    }, [searchTerm])

  return (
    <article>
      <h1 style={{ fontSize: "2rem", textAlign: "center" }}>Search</h1>
      <SearchBox handleSearch={handleSearch} searchTerm={searchTerm} />
      <Filter handleFilter={handleFilter} filter={filter}/>
      <ResultContainer results={results} />
    </article>
  );
 }
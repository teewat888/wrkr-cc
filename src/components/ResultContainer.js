import React from 'react'
import { Result } from './Result'

/**
* @author
* @function Result
**/

export const ResultContainer = ({results}) => {
   if (!results || results === undefined || results.length === 0) {
     //handling the undefinded
     return null;
   }
  return (
    <>
    <hr/>
      {results.total_count} repository results
      {results.items.map((result) => (
        <Result key={result.id} repo={result} />
      ))}
      
    </>
  );

 }
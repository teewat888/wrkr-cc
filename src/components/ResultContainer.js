import React from 'react'
import { Result } from './Result'

/**
* @author
* @function Result
**/

export const ResultContainer = ({results}) => {
  //handling undefined and API not called 
  if (!results || results.length === 0) {
    return null;
  }
  return (
    <>
      <hr />
      <div data-testid="custom-element" />
      {results.total_count > 0
        ? `${results.total_count}repository results`
        : "No Result"}
      {results.items.map((result) => (
        <Result key={result.id} repo={result} />
      ))}
    </>
  );
}
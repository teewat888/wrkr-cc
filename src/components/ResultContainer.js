import React from 'react'
import { Result } from './Result'

/**
* @author
* @function Result
**/

export const ResultContainer = ({results}) => {
  //handling undefined and API not called 
  if (!results || results.length === 0 || results === undefined) {
    return null;
  }
  return (
    <>
      <hr />
      <div data-testid="custom-element" />
      {results.total_count > 0 ? (
        <p>
          <b>{results.total_count}&nbsp;repository results</b> (only 20 results
          show here)
        </p>
      ) : (
        <b>No Results</b>
      )}
      {results.items.map((result) => (
        <Result key={result.id} repo={result} />
      ))}
    </>
  );
}
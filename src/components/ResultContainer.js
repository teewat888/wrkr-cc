import React from 'react'
import { Result } from './Result'

/**
* @author
* @function Result
**/

export const ResultContainer = ({results}) => {
  return (
    <>
    <hr/>
      {results.total_count} repository results
      <Result />
    </>
  );

 }
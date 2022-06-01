import React from 'react'

/**
* @author
* @function Filter
**/

export const Filter = ({handleFilter, filter}) => {
  return (
    <>
      Filter by language:
      <select value={filter} onChange={handleFilter}>
        <option value="All">All</option>
        <option value="javascript">JavaScript</option>
        <option value="typescript">TypeScript</option>
        <option value="html">HTML</option>
        <option value="css">CSS</option>
      </select>
    </>
  );

 }
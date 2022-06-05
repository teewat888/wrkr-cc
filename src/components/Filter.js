import React from 'react'

/**
* @author
* @function Filter
**/

export const Filter = ({handleFilter, filter}) => {
  return (
    <>
      <div style={{ paddingTop: "20px" }}>
        Filter by language:
        <select
          aria-label="filter"
          value={filter}
          onChange={handleFilter}
          style={{ border: "none", paddingLeft: "40px" }}
        >
          <option value="All">All</option>
          <option value="javascript">JavaScript</option>
          <option value="typescript">TypeScript</option>
          <option value="html">HTML</option>
          <option value="css">CSS</option>
        </select>
      </div>
    </>
  );

 }
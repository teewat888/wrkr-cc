import React from 'react'

/**
* @author
* @function Result 
* -> component to display an result
**/

export const Result = ({result}) => {
  return (
    <>
    <hr />
      <div>
        <img src="images/repo-16.svg" /> Name
      </div>
      <div>
        <div>Description</div>
        <div>Topic</div>
        <div>
          <img src="images/star-16.svg" /> starnumber language license updated
        </div>
      </div>
    </>
  );

 }
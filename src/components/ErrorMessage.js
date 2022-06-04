import React from 'react'

/**
* @author
* @function ErrorMessage
**/

export const ErrorMessage = ({ errorMessage }) => {
  return (
    <>
    <p style={{ color: "#ff0000" }}>{errorMessage}</p>
    </>
  );

 }
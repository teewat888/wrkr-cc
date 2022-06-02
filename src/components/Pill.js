import React from 'react'
import "../styles/pill.css"
/**
* @author
* @function Pill
* pill topic component
**/

export const Pill = ({topics}) => {
  return (
    <>
      {topics.map((topic,i) => (
        <button className="button" key={i}>{topic}</button>
       
      ))}
    </>
  );

 }
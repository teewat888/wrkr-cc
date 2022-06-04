import React  from 'react'
/**
* @author Teerawat
* @function Header
**/

export const Header = ({isNavExpanded, setIsNavExpanded}) => {
   
  return (
    <>
      <header>
        <div id="hmenu">
          <a href="#" onClick={() => {
              setIsNavExpanded(!isNavExpanded);
          }}>&#9776;</a>
        </div>
        Header
      </header>
    </>
  );

 }
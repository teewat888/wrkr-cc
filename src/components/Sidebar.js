import React from 'react'
/**
* @author Teerawat
* @function sidebar
**/

export const Sidebar = ({ isNavExpanded }) => {
  return (
    <>
      <nav className={isNavExpanded ? "navBar expanded" : "navBar"}>
        <ul>
          <li>
            <a href="#">Nav Item 1</a>
          </li>
          <li>
            <a href="#">Nav Item 2</a>
          </li>
          <li>
            <a href="#">Nav Item 3</a>
          </li>
        </ul>
      </nav>
    </>
  );
};
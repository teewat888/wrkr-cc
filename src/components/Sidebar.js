import React from 'react'
import '../styles/sidebar.css'
/**
* @author Teerawat
* @function sidebar
**/

export const Sidebar = (props) => {
  return (
    <>
      <nav className="navBar">
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

 }
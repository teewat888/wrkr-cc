import React, { useEffect } from 'react'
/**
* @author Teerawat
* @function sidebar
**/

export const Sidebar = ({ isNavExpanded }) => {
    const menus = [
        { name: 'Nav Item 1', link: '#' },
        { name: 'Nav Item 2', link: '#' },
        { name: 'Nav Item 3', link: '#' },
    ];
  return (
    <>
      <nav className={isNavExpanded ? "navBar expanded" : "navBar"}>
        <ul>
          {menus.map((menu, i) => (
            <li key={i}>
              <a href={menu.link}>{menu.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};
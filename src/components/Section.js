import React from 'react'
import { Content } from './Content'
import { Sidebar } from './Sidebar'

/** 
* @function Section
**/

export const Section = ({isNavExpanded}) => {
  return (
    <section>
      <Sidebar isNavExpanded={isNavExpanded} />
      <Content isNavExpanded={isNavExpanded} />
    </section>
  );

 }
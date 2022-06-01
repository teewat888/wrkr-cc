import React from 'react'
import { Content } from './Content'
import { Sidebar } from './Sidebar'

/** 
* @function Section
**/

export const Section = (props) => {
  return(
    <section>
        <Sidebar />
        <Content />
    </section>
   )

 }
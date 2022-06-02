import React from 'react'
import { formatDate } from '../helper/timeFormat';
import { Pill } from './Pill';
/**
* @author
* @function Result 
* -> component to display an result
**/

export const Result = ({repo}) => {
  return (
    <>
      <hr />
      <div>
        <img src="images/repo-16.svg" /> {repo.full_name}
      </div>
      <div style={{ paddingLeft: "20px" }}>
        <div>{repo.description}</div>
        <Pill topics={repo.topics} />
        <div>
          <img src="images/star-16.svg" /> {repo.stargazers_count}{" "}
          {repo.language} &nbsp;&nbsp;
          {repo.license === null ? "no license" : repo.license.name} &nbsp;
          updated {formatDate(repo.updated_at)}
        </div>
      </div>
    </>
  );

 }
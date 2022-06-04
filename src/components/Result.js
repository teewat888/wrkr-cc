import React from 'react'
import { formatDate } from '../helper/timeFormat';
import { Pill } from './Pill';
import repoImg from "../images/repo-16.svg";
import star from '../images/star-16.svg';
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
        <div style={{ float: "left" }}>
          <img src={repoImg} alt="repo image" />
        </div>
        <div>{repo.full_name}</div>
      </div>
      <div style={{ paddingLeft: "20px" }}>
        <div>{repo.description}</div>
        <Pill topics={repo.topics} />
        <div>
          <img src={star} alt="star image" /> {repo.stargazers_count}{" "}
          {repo.language} &nbsp;&nbsp;
          {repo.license === null ? "No License Info" : repo.license.name} &nbsp;
          updated {formatDate(repo.updated_at)}
        </div>
      </div>
    </>
  );

 }
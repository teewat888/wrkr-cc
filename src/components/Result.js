import React from 'react'
import { formatDate } from '../helper/timeFormat';
import { Pill } from './Pill';
import '../styles/result.css'
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
      <div style={{paddingBottom: "5px"}}>
        <img src={repoImg} alt="repo image" className="filter-grey" />
        &nbsp;
        {repo.owner.login}/{repo.name}
      </div>
      <div style={{ paddingLeft: "20px" }}>
        <div className="description">{repo.description}</div>
        <Pill topics={repo.topics} />
        <div className="last-line-text">
          <img src={star} alt="star image" className="filter-grey" />{" "}
          {repo.stargazers_count} {repo.language} &nbsp;&nbsp;
          {repo.license === null ? "No License Info" : repo.license.name} &nbsp;
          updated {formatDate(repo.updated_at)}
        </div>
      </div>
    </>
  );

 }
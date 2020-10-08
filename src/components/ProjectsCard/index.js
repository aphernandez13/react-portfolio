import React from "react";
import "./style.css";

function ProjectsCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>{props.name}</strong> 
          </li>
          <br/>
          <a href={props.gitUrl}>
            <strong>View on Github</strong> 
          </a>
          <br/>
          <br/>
          <a href={props.deployedUrl}>
            <strong>View Deployed App</strong> 
          </a>
        </ul>
      </div>
     
    </div>
  );
}

export default ProjectsCard;

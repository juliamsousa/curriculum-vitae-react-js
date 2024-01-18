import React from "react";
import "./projectItem.css"

export default function ProjectItem (props) {
     return (
      <div className="project-item">
        <a href={props.link} target="_blank">
          <img src={props.image} alt={props.alt}/>
          <h3>{props.title}</h3>
          <p>{props.description}</p>
        </a>
      </div>
    )
}

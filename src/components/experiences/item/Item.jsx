import React from "react";
import "./item.css"

export default function Item (props) {
     return (
      <div className="experience-item">
        <div className="title-date">
          <h3 className="title">{props.title}</h3>
          <p className="date">
            {props.date}
          </p>
        </div>

        <h4>{props.location}</h4>
        <p className="descricao">
          {props.description}
        </p>

        <ul>
          {
            props.bullets?.map(bullet => {
              return <li>{bullet}</li>
            })
          }
        </ul>
        <b>
          {props.knowledge} 
        </b>
        <ul>
          {
            props.knowledges?.map(bullet => {
              return <li>{bullet}</li>
            })
          }
        </ul>
        <a href={props.linkURL} target="blank">
          {props.linkDescription}
        </a>
        <i>{props.coeficiente}</i>
      </div>
    )
}

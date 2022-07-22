import React from "react";
import "./item.css"

export function Item (props) {
     return (
      <div className="experience-item">
        <div className="title-date">
          <h3 className="title">{this.props.title}</h3>
          <p className="date">
            {this.props.date}
          </p>
        </div>

        <h4>{this.props.location}</h4>
        <p className="descricao">
          {this.props.description}
        </p>
      </div>
    )
}

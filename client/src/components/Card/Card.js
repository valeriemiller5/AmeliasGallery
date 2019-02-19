import React from "react";
import "./Card.css";

const Card = props => (
  <div>
    <label>
      <div className="card">
        <div className="card_face front">
          <img alt={props.name} src={require("../../images/" + props.image)} />
        </div>
        <div className="card_face back">
          <h1>{props.title || "Artwork Title"}</h1>
          <a href="/piece">Click here for more information</a>
        </div>
      </div>
    </label>
  </div>
);

export default Card;

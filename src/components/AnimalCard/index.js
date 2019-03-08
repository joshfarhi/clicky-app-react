import React from "react";
import "./style.css";

function AnimalCard(props) {
  
  return (
    <div className="card">
      <div className="img-container">
        <img onClick={props.onClick} alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
         
         
        </ul>
      </div>
    </div>
  );
}

export default AnimalCard;
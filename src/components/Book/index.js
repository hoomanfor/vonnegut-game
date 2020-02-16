import React from "react";
import "./style.css";

function Book(props) {
  return (
      <div id={props.id} onClick={() => props.shuffleBooks(props.id)} className="img-container">
        <img alt={props.name} src={process.env.PUBLIC_URL + props.image} height="200px" />
      </div>
  );
}

export default Book;

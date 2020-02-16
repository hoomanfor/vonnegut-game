import React from "react";
import "./style.css";

function Book(props) {
  return (
      <div className="img-container">
        <img alt="" src={process.env.PUBLIC_URL + props.image} height="200px" />
      </div>
  );
}

export default Book;

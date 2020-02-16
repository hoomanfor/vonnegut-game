import React from "react";
import "./style.css";

function Book(props) {
  return (
        <img alt="" src={process.env.PUBLIC_URL + props.image} height="200px" />
  );
}

export default Book;

import React from "react";
import "./style.css";

function Header(props) {
    return (
        <div>
            <span>score = {props.score} topScore = {props.topScore} guesses = {props.guesses}</span>
        </div>
    );
}

export default Header
import React from "react";
import "./style.css";

function Header(props) {
    return (
        <div className="flex-header">
            {/* <span>score = {props.score} topScore = {props.topScore} guesses = {props.guesses}</span> */}
            <div className="flex-children">
                <div className="sub-heading">"And so it goes..."</div>
                <div className="heading">Vonnegut Memory Game</div>
            </div>
            <div className={props.notificationClass}>{props.notification}</div>
            <div className="flex-children score">Score: {props.score} | Top Score: {props.topScore}</div>
        </div>
    );
}

export default Header;
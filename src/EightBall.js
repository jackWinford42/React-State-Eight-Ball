import React, { useState } from "react";
import "./EightBall.css"

const EightBall = (props) => {
    const shakeItUp = () => {
        const randomIndex = () => Math.floor(Math.random() * props.answers.length);
        const response = props.answers[randomIndex()];
        setColor(response.color);
        setAnswer(response.msg);
    }
    const [color, setColor] = useState("black");
    const [answer, setAnswer] = useState("Think of a Question");
    return (
        <div className="EightBall" className={color} onClick={shakeItUp}>
            <h4>
                {answer} {color}
            </h4>
        </div>
    )
}

export default EightBall;
//  style={{background-color: (props.doOnce ? "black" : answer.color),}}
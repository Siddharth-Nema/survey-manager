import React, { useState } from "react";
import Option from './Option';

function Question(props) {

    function changeSelection(answer) {
        props.markAnswer(answer, props.index);
    }

    return <div className='Question'>
        <h2>Question {props.index + 1}</h2>
        <h3>{props.source.title}</h3>
        {
            props.source.options.map(
                (option, index) => <Option source={option} key={index} id={index}
                    onClicked={changeSelection} />
            )
        }
    </div>;
}
export default Question;
import React, { useState } from 'react';
import Question from './Question';

var answers = [];
function Survey(props) {
    var [index, setIndex] = useState(0);
    var questions = props.source;

    function getNextQuestion() {
        if (index < questions.length - 1) {
            setIndex(++index);
        } else {
            console.log(answers);
        }
    }

    function getPreviousQuestion() {
        if (index > 0) {
            setIndex(--index);
        }
    }

    function markAnswer(selectedAnswer, id) {
        answers[id] = selectedAnswer;
    }

    return <div>
        <Question source={questions[index]} index={index} markAnswer={markAnswer} />

        <button onClick={getNextQuestion}>Next</button>
        <button onClick={getPreviousQuestion}>Previous</button>
        {
            (index === questions.length - 1) && <button onClick={getNextQuestion}>Submit</button>
        }
    </div>;
}

export default Survey;
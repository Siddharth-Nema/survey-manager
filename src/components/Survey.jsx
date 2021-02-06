import React, { useState } from 'react';
import Question from './Question';
import NavButton from './NavButton';

function Survey(props) {

    var [questionIndex, setQuestionIndex] = useState(0);
    var questions = props.source;
    const [selectedOptions, modifySelectedOptions] = useState(new Array(questions.length).fill(null));

    function getNextQuestion() {
        if (questionIndex < questions.length - 1) {
            setQuestionIndex(++questionIndex);
        } else {
        }
    }

    function getPreviousQuestion() {
        if (questionIndex > 0) {
            setQuestionIndex(--questionIndex);
        }
    }

    function submitSurvey() {
        console.log(selectedOptions);
        //TODO: Complete the function
    }

    function markAnswer(selectedOptionID) {
        modifySelectedOptions(
            function () {
                selectedOptions[questionIndex] = selectedOptionID;
                return selectedOptions;
            }
        )
    }

    return <div>
        <Question source={questions[questionIndex]} questionIndex={questionIndex} markAnswer={markAnswer} />

        <NavButton onClick={getPreviousQuestion} title='Previous' />
        <NavButton onClick={getNextQuestion} title='Next' />
        {
            (questionIndex === questions.length - 1) && <NavButton onClick={submitSurvey} title='Submit' />
        }
    </div>;
}

export default Survey;
import React, { useState } from 'react';
import QuestionCreator from '../components/SurveyCreator/QuestionCreator';
import '../css/SurveyCreator.css';

function SurveyCreator() {

    var [questionList, setQuestionList] = useState([]);

    function addQuestionCreator() {
        console.log('add Question');
        setQuestionList([...questionList, <QuestionCreator />])
    }

    function createSurvey() {
        var createdQuestions = [];

        let questionCreatorsList = document.getElementsByTagName('form');
        for (let i = 0; i < questionCreatorsList.length; i++) {
            var question = {};
            let questionFields = questionCreatorsList[i].children;
            for (let j = 0; j < questionFields.length; j++) {
                if (questionFields[j].tagName == 'INPUT') {
                    let fieldTitle = questionFields[j].classList[0];
                    question[fieldTitle] = questionFields[j].value;
                }
            }
            createdQuestions.push(question);
        }

        console.log(createdQuestions);
    }

    return <div className='SurveyCreator'>
        <h1>You are at Survey Creator page</h1>
        {questionList}
        <button className='addQuestionCreatorButton' onClick={addQuestionCreator}>+</button>
        <button onClick={createSurvey}>Submit</button>
    </div>
}

export default SurveyCreator;
import React, { useState } from "react";
import "../css/SurveyPage.css";
import { useHistory } from "react-router-dom";
import Question from "../components/SurveyPage/Question";
import NavButton from "../components/SurveyPage/NavButton";

function Survey(props) {
  var history = useHistory(); //holds the routing history and has funtions to redirect to other routes
  var propsPassedFromLink = props.location.state;

  var [questionIndex, setQuestionIndex] = useState(0);
  var questions = propsPassedFromLink.questions;
  const [selectedOptions, modifySelectedOptions] = useState(
    new Array(questions.length).fill(null)
  );

  function getNextQuestion() {
    if (questionIndex < questions.length - 1) {
      setQuestionIndex(++questionIndex);
    }
  }

  function getPreviousQuestion() {
    if (questionIndex > 0) {
      setQuestionIndex(--questionIndex);
    }
  }

  function submitSurvey() {
    console.log(selectedOptions);
    history.push("/submission");
    //TODO: Complete the function
  }

  function markAnswer(selectedOptionID) {
    modifySelectedOptions(function () {
      selectedOptions[questionIndex] = selectedOptionID;
      return selectedOptions;
    });
  }

  return (
    <div>
      <Question
        source={questions[questionIndex]}
        questionIndex={questionIndex}
        markAnswer={markAnswer}
      />

      <NavButton onClick={getPreviousQuestion} title="Previous" />
      <NavButton onClick={getNextQuestion} title="Next" />
      {questionIndex === questions.length - 1 && (
        <NavButton onClick={submitSurvey} title="Submit" />
      )}
    </div>
  );
}

export default Survey;

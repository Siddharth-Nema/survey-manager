import React, { useState } from "react";
import { useHistory } from "react-router";
import QuestionCreator from "../components/SurveyCreator/QuestionCreator";
import "../css/SurveyCreator.css";

function SurveyCreator() {
  var history = useHistory();
  var [questionList, setQuestionListN] = useState([]);

  function addQuestionCreator() {
    console.log("add Question");
    setQuestionListN([
      ...questionList,
      {
        title: "",
        options: [],
      },
    ]);
  }

  function createSurvey() {
    history.push({
      pathname: "/dashboard",
      state: questionList,
    });
  }

  return (
    <div className="SurveyCreator">
      <h1>You are at Survey Creator page</h1>
      {questionList.map((question, index) => (
        <QuestionCreator key={index} question={question} />
      ))}
      <button className="addQuestionCreatorButton" onClick={addQuestionCreator}>
        +
      </button>
      <button onClick={createSurvey}>Submit</button>
    </div>
  );
}

export default SurveyCreator;

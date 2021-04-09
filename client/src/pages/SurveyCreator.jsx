import React, { useState } from "react";
import { useHistory } from "react-router";
import QuestionCreator from "../components/SurveyCreator/QuestionCreator";
import "../css/SurveyCreator.css";
import { storeSurvey } from "../service/BackendService";

function SurveyCreator() {
  var history = useHistory();
  const [title, setTitle] = useState("");
  var [questionList, setQuestionListN] = useState([]);

  function addQuestionCreator() {
    setQuestionListN([
      ...questionList,
      {
        title: "",
        options: [],
      },
    ]);
  }

  function submitSurvey() {
    var createdSurvey = {
      title: title,
      questions: questionList,
    };
    storeSurvey(createdSurvey)
      .then((data) => {
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });

    history.push("/dashboard");
  }

  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

  return (
    <div className="SurveyCreator">
      <h1>You are at Survey Creator page</h1>
      <input type="text" onChange={handleTitleChange} />
      {questionList.map((question, index) => (
        <QuestionCreator key={index} question={question} />
      ))}
      <button className="addQuestionCreatorButton" onClick={addQuestionCreator}>
        +
      </button>
      <button onClick={submitSurvey}>Submit</button>
    </div>
  );
}

export default SurveyCreator;

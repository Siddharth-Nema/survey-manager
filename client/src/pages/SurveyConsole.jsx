import React, { useState, useEffect } from "react";
import "../css/SurveyConsole.css";
import SurveysTable from "../components/SurveyConsole/SurveysTable";
import { Link } from "react-router-dom";
import { getSurveyIDs, getSurveys } from "../service/BackendService";

function SurveyConsole() {
  const [surveys, setSurveys] = useState([]);

  useEffect(() => {
    getSurveys()
      .then((data) => {
        setSurveys(data);
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div className="SurveyConsole">
      <h2>Your Surveys</h2>
      <p>Manage all of your surveys and view their results.</p>
      <hr />

      <h4>3 surveys</h4>
      <SurveysTable surveys={surveys} />

      <Link to="/create-survey">
        <button className="btn btn-large addSurveybtn">Add Survey</button>
      </Link>
    </div>
  );
}

export default SurveyConsole;

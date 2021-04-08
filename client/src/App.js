import "./css/App.css";
import Header from "./components/Header";
import Survey from "./pages/Survey";
import SubmissionPage from "./pages/SubmissionPage";
import UserDashboard from "./pages/UserDashboard";
import SurveyCreator from "./pages/SurveyCreator";
import { Route, BrowserRouter as Router, Redirect } from "react-router-dom";

import { getSurveys, storeSurvey } from "./service/BackendService";

function App() {
  function backendTest() {
    getSurveys()
      .then((data) => {
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });

    var sampleData = ["This is a sample data", "You can ignore this!!"];
    storeSurvey(sampleData)
      .then((data) => {
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  //backendTest();

  return (
    <div className="App">
      <Header />
      <Router>
        <Redirect from="/" to="/dashboard" />

        <Route path="/dashboard" component={UserDashboard} />

        <Route path="/survey" exact component={Survey} />

        <Route path="/create-survey" component={SurveyCreator} />

        <Route path="/submission" component={SubmissionPage} />
      </Router>
    </div>
  );
}

export default App;

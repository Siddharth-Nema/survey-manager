import Header from './components/Header';
import Survey from './pages/Survey';
import SubmissionPage from "./pages/SubmissionPage";
import UserDashboard from './pages/UserDashboard';
import { Route, BrowserRouter as Router, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Router >
        <Redirect from='/' to='/dashboard' />

        <Route
          path='/dashboard'
          component={UserDashboard}
        />

        <Route
          path='/survey'
          exact
          component={Survey}
        />

        <Route
          path='/submission'
          component={SubmissionPage}
        />


      </Router>

    </div>
  );
}

export default App;

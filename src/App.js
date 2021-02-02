import './App.css';
import Header from './components/Header';
import Survey from './components/Survey';
import survey_questions from './survey';

function App() {
  return (
    <div className="App">
      <Header />
      <Survey source={survey_questions} />
      <br />

      {/* {
        survey_questions.map(
          (question, index) => <Question source={question} key={index} index={index} />
        )
      } */}
    </div>
  );
}

export default App;

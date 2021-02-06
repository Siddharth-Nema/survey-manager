import './App.css';
import Header from './components/Header';
import Survey from './components/Survey';
import survey_questions from './survey';

function App() {
  return (
    <div className="App">
      <Header />
      <Survey source={survey_questions} />
    </div>
  );
}

export default App;

import SurveyTile from "./SurveyTile";

function SurveysList(props) {
  function getGrid() {
    var grid;
    for (let i = 0; i < props.surveys.length(); i = i + 4) {}
  }

  return (
    <div className="SurveysList row">
      {props.surveys.map((survey, index) => {
        console.log(survey._id);
        return (
          <SurveyTile
            key={index}
            title={survey.title}
            questions={survey.questions}
            id={survey._id}
          />
        );
      })}
    </div>
  );
}

export default SurveysList;

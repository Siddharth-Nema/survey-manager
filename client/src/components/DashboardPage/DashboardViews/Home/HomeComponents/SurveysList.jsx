import SurveyTile from "./SurveyTile";

function SurveysList(props) {
  return (
    <div className="SurveysList">
      {props.surveys.map((survey, index) => {
        return (
          <SurveyTile
            key={index}
            title={survey.title}
            questions={survey.questions}
          />
        );
      })}
    </div>
  );
}

export default SurveysList;

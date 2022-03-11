import SurveyTableRow from "./SurveyTableRow";
function SurveysTable(props) {
  return (
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col">Title</th>
          <th scope="col">Respondents</th>
          <th scope="col">Status</th>
        </tr>
      </thead>
      <tbody>
        {props.surveys.map((survey, index) => {
          return(
            <SurveyTableRow
            index={index}
            title={survey.title}
            respondents={survey.responses.length}
            status="Published"
            survey = {survey}
          />)
        }
        )}
      </tbody>
    </table>
  );
}

export default SurveysTable;

import SurveysList from "./HomeComponents/SurveysList";

function Home(props) {
  var propsPassedFromLink = props.location.state;
  console.log(propsPassedFromLink);
  return (
    <div className="Home">
      <h1>Surveys you might like</h1>
      <SurveysList />
    </div>
  );
}

export default Home;

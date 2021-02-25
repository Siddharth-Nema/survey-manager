import { Link } from "react-router-dom";

function SurveyTile(props) {
    return <div className='SurveyTile'>
        <h3>{props.title}</h3>
        <Link to={
            {
                pathname: '/survey',
                state: {
                    questions: props.survey,
                }
            }

        }><button className='OpenSurveyButton'>Take Survey</button></Link>
    </div>;
}

export default SurveyTile;
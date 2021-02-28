import SurveyTile from './SurveyTile';
import CodingSurvey from "../../../../../SampleSurveys/CodingSurvey";
import PokemonSurvey from "../../../../../SampleSurveys/PokemonSurvey";

function SurveysList() {
    return <div className='SurveysList'>
        <SurveyTile title='Pokemon' survey={PokemonSurvey} />
        <SurveyTile title='Coding' survey={CodingSurvey} />
    </div>
}

export default SurveysList;
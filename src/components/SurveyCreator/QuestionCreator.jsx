import { useState } from "react";

function QuestionCreator() {

    var [title, setTitle] = useState('');
    var [noOfOptions, setNoOfOptions] = useState(1);

    function handleTitleChange(event) {
        setTitle(event.target.value);
    }

    function handleChangeInNoOfOptions(event) {
        setNoOfOptions(event.target.value);
    }

    function getOptionCreators(number) {
        var optionsList = [];
        for (var i = 0; i < number; i++) {
            optionsList.push(
                <input type="text" class='optionField' />
            )
        }
        return optionsList;
    }


    return <div className='QuestionCreator'>
        <form>
            <label htmlFor="title">Title</label>
            <input type="text" class='titleField' id="title" value={title} onChange={handleTitleChange} />

            <select name="noOfOptions" id="noOfOption" value={noOfOptions} onChange={handleChangeInNoOfOptions}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>

            {getOptionCreators(noOfOptions)}
        </form>
    </div>
}

export default QuestionCreator;
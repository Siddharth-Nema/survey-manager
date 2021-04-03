import { useState } from "react";

function QuestionCreator(props) {
  var [noOfOptions, setNoOfOptions] = useState(1);

  function handleTitleChange(event) {
    props.question.title = event.target.value;
    console.log(props.question.title);
  }

  function handleChangeInNoOfOptions(event) {
    setNoOfOptions(event.target.value);
  }

  function getOptionCreators(number) {
    var optionsList = [];
    for (var i = 0; i < number; i++) {
      optionsList.push(
        <input
          id={i}
          key={i}
          type="text"
          className="optionField"
          onChange={handleOptionChange}
        />
      );
    }
    return optionsList;
  }

  function handleOptionChange(event) {
    props.question.options[event.target.id] = event.target.value;
  }

  return (
    <div className="QuestionCreator">
      <form>
        <label htmlFor="title">Title</label>
        <input type="text" onChange={handleTitleChange} />

        <select
          name="noOfOptions"
          id="noOfOption"
          value={noOfOptions}
          onChange={handleChangeInNoOfOptions}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>

        {getOptionCreators(noOfOptions)}
      </form>
    </div>
  );
}

export default QuestionCreator;

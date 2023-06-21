import PropTypes from "prop-types";
import "./Slider.css";

export default function Slider({ question, formState, setFormState }) {
  return (
    <div className="Slider">
      <div className="div1">
        <h3>{question.title}</h3>
      </div>

      <div className="div3">
        {question.responses.map((response) => (
          <label key={response} htmlFor="Acide">
            {response}
          </label>
        ))}
      </div>
      <div className="div4">
        <input
          className="Range"
          id="Acide"
          type={question.type}
          orient="vertical"
          onChange={(event) =>
            setFormState({ ...formState, [question.title]: event.target.value })
          }
          value={formState[question.title]}
          min={0}
          max={4}
        />
      </div>

      <div className="div2">
        <h3>{question.title}</h3>
      </div>
    </div>
  );
}

Slider.propTypes = {
  question: PropTypes.shape({
    title: PropTypes.string.isRequired,
    responses: PropTypes.arrayOf(PropTypes.string).isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
  formState: PropTypes.shape.isRequired,
  setFormState: PropTypes.func.isRequired,
};

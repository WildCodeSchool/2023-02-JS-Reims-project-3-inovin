import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import glassWine from "../Pictures/glassWine.png";
import glass from "../Pictures/glass.png";

export default function GlassCard({ title, isCompleted, onClick }) {
  return (
    <Link to="/Questionnaire" onClick={onClick}>
      <figure className="glassAll">
        <figcaption> {title}</figcaption>
        {isCompleted ? (
          <img src={glassWine} alt="filled glass" />
        ) : (
          <img src={glass} alt="empty glass" />
        )}
      </figure>
    </Link>
  );
}

GlassCard.propTypes = {
  title: PropTypes.string.isRequired,
  isCompleted: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

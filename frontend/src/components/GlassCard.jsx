import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import glassWine from "../Pictures/glassWine.png";
import glass from "../Pictures/glass.png";

export default function GlassCard({ wine, isCompleted, onClick }) {
  return (
    <Link to={`/questionnaire/${wine.id}`} onClick={onClick}>
      <figure className="glassAll">
        <figcaption> {wine.name}</figcaption>
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
  wine: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  isCompleted: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

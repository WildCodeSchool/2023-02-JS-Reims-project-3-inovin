import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import glassWine from "../Pictures/glassWine.jpg";
import glass from "../Pictures/glass.png";

export default function GlassCard({ title, isCompleted }) {
  return isCompleted ? (
    <figure className="glassAll">
      <figcaption> {title}</figcaption>
      <img src={glassWine} alt="glass of wine" />
    </figure>
  ) : (
    <Link to="/Questionnaire">
      <figure className="glassGrenn">
        <figcaption> {title}</figcaption>
        <img src={glass} alt="glass" />
      </figure>
    </Link>
  );
}

GlassCard.propTypes = {
  title: PropTypes.string.isRequired,
  isCompleted: PropTypes.bool.isRequired,
};

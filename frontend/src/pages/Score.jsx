import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import { GiWineBottle } from "react-icons/gi";
import Navbar from "../components/Navbar";

function Stars() {
  const [rating, setRating] = useState(100);

  const handleRating = (rate) => {
    setRating(rate);
  };

  return (
    <Rating
      tooltipArray={[
        "1/10",
        "2/10",
        "3/10",
        "4/10",
        "5/10",
        "6/10",
        "7/10",
        "8/10",
        "9/10",
        "10/10",
      ]}
      transition
      showTooltip
      fillIcon={<GiWineBottle size={38} />}
      emptyIcon={<GiWineBottle size={38} />}
      fillColor="#ac1e44"
      iconsCount={10}
      onClick={handleRating}
      ratingValue={rating}
    />
  );
}

function Score() {
  return (
    <>
      <Navbar />
      <div className="Notations">
        <h1>Voici La Notation</h1>
        <div className="Notation">
          <Stars />
        </div>

        <Link to="/fourglass" className="NotationButton">
          Validé
        </Link>
      </div>
    </>
  );
}

export default Score;

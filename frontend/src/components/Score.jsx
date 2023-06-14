import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";
import { GiWineBottle } from "react-icons/gi";

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
      fillIcon={<GiWineBottle size={50} />}
      emptyIcon={<GiWineBottle size={50} />}
      fillColor="#ac1e44"
      iconsCount={10}
      onClick={handleRating}
      ratingValue={rating}
    />
  );
}

function Notation() {
  return (
    <div className="Notation">
      <h1>Voici La Notation</h1>
      <Stars />
    </div>
  );
}

export default Notation;

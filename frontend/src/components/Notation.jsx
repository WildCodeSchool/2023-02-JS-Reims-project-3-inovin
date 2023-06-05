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
      tooltipArray={["nul", "bof", "moyen", "top", "génial"]}
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
    <div className="App">
      <h1>Voici La Notation</h1>
      <Stars />
      <Stars />
    </div>
  );
}

export default Notation;

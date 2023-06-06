// import { useState } from "react";
import { Link } from "react-router-dom";
import glassWine from "../Pictures/glass_wine.jpg";

export default function Glasses() {
  // const [glass, setGlass] = useState();

  return (
    <section>
      <h1 className="title_4glasses">Affinez vos goûts</h1>

      <div className="glasses">
        <Link to="/Questionnaire">
          <figure className="glass_1">
            <figcaption> VIN 1 </figcaption>
            <img src={glassWine} alt="glass of wine" />
          </figure>
        </Link>
        <Link to="/Questionnaire">
          <figure className="glass_2">
            <figcaption> VIN 2 </figcaption>
            <img src={glassWine} alt="glass of wine" />
          </figure>
        </Link>
        <Link to="/Questionnaire">
          <figure className="glass_4">
            <figcaption> VIN 3 </figcaption>
            <img src={glassWine} alt="glass of wine" />
          </figure>
        </Link>
        <Link to="/Questionnaire">
          <figure className="glass_4">
            <figcaption> VIN 4 </figcaption>
            <img src={glassWine} alt="glass of wine" />
          </figure>
        </Link>
      </div>
    </section>
  );
}

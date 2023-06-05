// import { useState } from "react";
import glassWine from "../Pictures/glass_wine.jpg";

export default function Glasses() {
  // const [glass, setGlass] = useState();

  // function quizDisplay() {
  //   return "hello world";
  // }

  return (
    <section>
      <h1 className="title_4glasses">Affinez vos goûts</h1>

      <div className="glasses">
        <figure className="glass_1" /* onClick={quizDisplay} */>
          <img src={glassWine} alt="glass of wine" />
          <figcaption> VIN 1 </figcaption>
        </figure>

        <figure className="glass_2" /* onClick={quizDisplay} */>
          <img src={glassWine} alt="glass of wine" />
          <figcaption> VIN 2 </figcaption>
        </figure>

        <figure className="glass_4" /* onClick={quizDisplay} */>
          <img src={glassWine} alt="glass of wine" />
          <figcaption> VIN 3 </figcaption>
        </figure>

        <figure className="glass_4" /* onClick={quizDisplay} */>
          <img src={glassWine} alt="glass of wine" />
          <figcaption> VIN 4 </figcaption>
        </figure>
      </div>
    </section>
  );
}

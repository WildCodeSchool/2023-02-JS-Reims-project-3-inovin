import { Link } from "react-router-dom";
import wines from "../Pictures/WinesColor.png";

export default function Intro() {
  return (
    <section className="backgroundIntro">
      <img src={wines} alt="Bouteille de vin" />
      <h1>Bienvenue ___</h1>
      <div className="linkDiv">
        <Link className="linkStart" to="/FourGlass">
          COMMENCEZ L'AVENTURE
        </Link>
      </div>
    </section>
  );
}

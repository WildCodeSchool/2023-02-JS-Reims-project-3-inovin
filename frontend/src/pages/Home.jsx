import { Link } from "react-router-dom";
import Logo from "../Pictures/logo2.png";
import "../App.scss";

export default function Home() {
  return (
    <div className="Home">
      <img src={Logo} alt="Ino Vin" />
      <h2>
        Explorez l'univers des saveurs vinicoles assemblez habilement différents
        cépages pour créer votre chef-d'œuvre gustatif, une symphonie de délices
        sur mesure.
      </h2>
      <div className="buttons">
        <Link className="buttonRegister" to="/register">
          S'inscrire
        </Link>
        <Link className="buttonLogin" to="/login">
          Se Connecter
        </Link>
      </div>
    </div>
  );
}

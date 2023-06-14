import React from "react";
import { Link } from "react-router-dom";
import "../App.scss";

function SignIn() {
  return (
    <div className="sign">
      <h2>
        Explorez l'univers des saveurs vinicoles assemblez habilement différents
        cépages pour créer votre chef-d'œuvre gustatif, une symphonie de délices
        sur mesure.
      </h2>
      <div className="button">
        <Link to="/register">S'inscrire</Link>
        <Link to="/login">Se Connecter</Link>
      </div>
    </div>
  );
}

export default SignIn;

import React from "react";
import { Link } from "react-router-dom";

function SignIn() {
  return (
    <div className="Sign">
      <h2>
        Explorez l'univers des saveurs vinicoles assemblez habilement différents
        cépages pour créer votre chef-d'œuvre gustatif, une symphonie de délices
        sur mesure.
      </h2>
      <div className="bouton">
        <Link to="/register">S'inscrire</Link>

        <br />

        <Link to="/login">Se Connecter</Link>
      </div>
    </div>
  );
}

export default SignIn;

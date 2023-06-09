import React from "react";
import { Link } from "react-router-dom";

function Profile() {
  return (
    <div className="profil">
      <h1>PROFIL</h1>
      <h2>Informations du compte</h2>
      <h2>Vos gouts</h2>
      <Link to="/home">Retour</Link>
    </div>
  );
}

export default Profile;

import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function AddWine() {
  const [name, setName] = useState("");
  const [color, setColor] = useState("");
  const [saveur, setSaveur] = useState("");

  const aaddwine = (event) => {
    event.preventDefault();
    fetch(
      `${import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5000"}/wines`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          color,
          grape_variety: saveur,
        }),
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Une erreur s'est produite lors de l'ajout du vin.");
        } else alert("Le formulaire a été soumis avec succès !");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <section className="adwines">
        <h1>Ajouter un vin</h1>

        <form onSubmit={aaddwine}>
          <div>
            <label htmlFor="name">Nom :</label>
            <input
              type="text"
              id="name"
              name="user_name"
              onChange={(event) => {
                setName(event.target.value);
              }}
              value={name}
            />
          </div>
          <div>
            <label htmlFor="Couleur">Couleur:</label>
            <input
              type="text"
              name="Couleur"
              onChange={(event) => {
                setColor(event.target.value);
              }}
              value={color}
            />
          </div>
          <div>
            <label htmlFor="Saveur">Saveur :</label>
            <input
              type="text"
              name="Saveur"
              onChange={(event) => {
                setSaveur(event.target.value);
              }}
              value={saveur}
            />
          </div>

          <button className="buttonLogin" type="submit">
            Envoyer
          </button>
        </form>

        <Link to="/afficher-mes-vins" className="buttonLogin">
          Voire la liste des vins
        </Link>
      </section>
    </>
  );
}

import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function AddWine() {
  const [name, setName] = useState("");
  const [color, setColor] = useState("");
  const [saveur, setSaveur] = useState("");

  const [focused, setFocused] = useState(false);
  const [filled, setFilled] = useState(false);

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = (event) => {
    const inputValue = event.target.value;
    if (inputValue === "") {
      setFilled(false);
      setFocused(false);
    } else {
      setFilled(true);
    }
  };

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
    <section className="backgroundAdwines">
      <h1>Ajouter un vin</h1>

      <form onSubmit={aaddwine}>
        <div className={`form-group ${focused ? "focused" : ""} inputAddWine`}>
          <input
            onFocus={handleFocus}
            onBlur={handleBlur}
            className={filled ? "filled" : ""}
            type="text"
            id="NameVin"
            name="NameVin"
            placeholder=" "
            onChange={(event) => {
              setName(event.target.value);
            }}
            value={name}
          />
          <label htmlFor="NameVin" className="form-label  labelAddWines">
            Nom du vin
          </label>
        </div>
        <div className={`form-group ${focused ? "focused" : ""} inputAddWine`}>
          <input
            onFocus={handleFocus}
            onBlur={handleBlur}
            className={filled ? "filled" : ""}
            type="text"
            id="Color"
            name="Color"
            placeholder=" "
            onChange={(event) => {
              setColor(event.target.value);
            }}
            value={color}
          />
          <label htmlFor="Color" className="form-label labelAddWines">
            La couleur
          </label>
        </div>
        <div className={`form-group ${focused ? "focused" : ""} inputAddWine`}>
          <input
            onFocus={handleFocus}
            onBlur={handleBlur}
            className={filled ? "filled" : ""}
            type="text"
            id="Saveur"
            name="Saveur"
            placeholder=" "
            onChange={(event) => {
              setSaveur(event.target.value);
            }}
            value={saveur}
          />
          <label htmlFor="Saveur" className="form-label labelAddWines">
            Les saveurs
          </label>
        </div>

        <div className="divButtonSubmit">
          <button className="buttonSubmit" type="submit">
            Envoyer
          </button>
        </div>
      </form>

      <div className="divButtonAddWines">
        <Link to="/accueil" className="buttonReturnAddWines">
          Retour
        </Link>
        <Link to="/afficher-mes-vins" className="buttonListWines">
          Liste des vins
        </Link>
      </div>
    </section>
  );
}

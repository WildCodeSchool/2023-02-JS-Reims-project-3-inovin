import { Box, TextField } from "@mui/material";
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
    <section className="backgroundAdwines">
      <h1>Ajouter un vin</h1>

      <form onSubmit={aaddwine}>
        <Box
          sx={{
            "& .MuiTextField-root": { m: 1, width: "20rem" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="filled-size-normal"
            label="Nom"
            variant="filled"
            onChange={(event) => {
              setName(event.target.value);
            }}
            value={name}
          />
        </Box>
        <Box
          sx={{
            "& .MuiTextField-root": { m: 1, width: "20rem" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="filled-size-normal"
            label="Couleur"
            variant="filled"
            onChange={(event) => {
              setColor(event.target.value);
            }}
            value={name}
          />
        </Box>
        <Box
          sx={{
            "& .MuiTextField-root": { m: 1, width: "20rem" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="filled-size-normal"
            label="Saveur"
            variant="filled"
            onChange={(event) => {
              setSaveur(event.target.value);
            }}
            value={name}
          />
        </Box>

        <div className="divButtonSubmit">
          <button className="buttonSubmit" type="submit">
            Envoyer
          </button>
        </div>
      </form>

      <Link to="/afficher-mes-vins" className="buttonListWines">
        Liste des vins
      </Link>
    </section>
  );
}

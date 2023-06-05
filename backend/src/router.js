const express = require("express");

const router = express.Router();

const questions = {
  "Examen visuel": {
    "Couleur et nuance": {
      Framboise: false,
      Cerise: false,
      Rubis: false,
      Pourpre: false,
      Violet: false,
      Grenat: false,
      Tuilé: false,
      "Jaune vert": false,
      "Jaune paille": false,
      "Or vert": false,
      "Or jaune": false,
      Doré: false,
      Ambré: false,
      Roux: false,
    },
    "Intensité de la couleur": {
      Claire: false,
      Moyenne: false,
      Trouble: false,
      Opaque: false,
    },
    "Fluidité des larmes": {
      "Fines et fluides": false,
      "Larges et visqueuses": false,
    },
  },
  "Examen olfactif": {
    "Intensité des arômes": {
      "Faible, vin fermé": false,
      Moyenne: false,
      "Forte, vin ouvert": false,
    },
    "Familles aromatiques": {
      Fruits: false,
      Fleurs: false,
      Épices: false,
      végétaux: false,
      Empyreumatiques: false,
      Animal: false,
      Défauts: false,
    },
  },
  "Examen gustatif": {
    Saveurs: {
      Acidité: false,
      Amer: false,
      Sucre: false,
      Gras: false,
      Alcool: false,
      Autre: "",
    },
    Structure: {
      Léger: false,
      Fluide: false,
      Charpenté: false,
    },
    Arômes: {
      Équilibre: false,
      "Persistance aromatique": {
        Courte: false,
        Moyenne: false,
        Persistante: false,
      },
    },
  },
};
router.get("/questions", (req, res) => {
  res.json(questions);
});

module.exports = router;

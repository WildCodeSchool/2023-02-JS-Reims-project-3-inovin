import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import wines from "../Pictures/WinesColor.png";
import { useAuth } from "../contexts/AuthContext";

export default function Intro() {
  const [informations, setInformations] = useState([]);
  const { token, setToken } = useAuth();
  const { isAdmin } = useAuth();

  const fetchInformationsData = () => {
    fetch(
      `${import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5000"}/user`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => setInformations([data]))
      .catch((error) => {
        console.error("Error fetching informations data:", error);
      });
  };

  useEffect(() => {
    fetchInformationsData();
  }, []);

  return (
    <section className="backgroundIntro">
      <img src={wines} alt="Bouteille de vin" />
      {informations.map((user) => (
        <h1>Bienvenue {user.firstname}</h1>
      ))}
      {isAdmin !== 1 && (
        <div className="linkDiv">
          <Link className="linkStart" to="/degustation">
            COMMENCEZ L'AVENTURE
          </Link>
        </div>
      )}
      {isAdmin === 1 && (
        <div className="introRoute">
          <Link to="/ajouter-mes-vins" className="ajoutermesvins">
            Ajouter mes vins
          </Link>
          <Link className="ajoutermesvins" to="/register">
            Inscrire un nouvel utilisateur
          </Link>
          <Link className="ajoutermesvins" to="/afficher-utilisateur">
            Voir les utilisateurs
          </Link>
          <Link
            to="/logout"
            className="linkStart logout"
            style={{
              display: "flex",
              justifyContent: "center",
            }}
            onClick={() => setToken(null)}
          >
            Déconnexion
          </Link>
        </div>
      )}
    </section>
  );
}

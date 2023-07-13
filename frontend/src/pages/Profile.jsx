import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useAuth } from "../contexts/AuthContext";
import "../App.scss";

function Profile() {
  const [tastes, setTastes] = useState([]);
  const [informations, setInformations] = useState([]);
  const { token } = useAuth();

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

  const fetchTastesData = () => {
    fetch(
      `${
        import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5000"
      }/responses`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => setTastes(data))
      .catch((error) => {
        console.error("Error fetching tastes data:", error);
      });
  };

  useEffect(() => {
    fetchInformationsData();
    fetchTastesData();
  }, []);
  return (
    <>
      <Navbar />
      <div className="profil">
        <div className="Information">
          <h2 className="title">Informations du compte</h2>

          {informations.map((user) => (
            <div key={user.id} className="userInfo">
              <div className="Nom">
                <p>Nom: {user.lastname}</p>
              </div>
              <div className="Prenom">
                <p>Prénom: {user.firstname}</p>
              </div>
              <div className="Email">
                <p>Email: {user.email}</p>
              </div>
              <div className="Gout">
                <p>Gout de base : {user.choice_of_tastes}</p>
              </div>
              <div className="Date">
                <p>Date de Naissance: {user.date_of_birth}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="gouts">
          <h2 className="title">Vos goûts</h2>
          {tastes.map((response) => (
            <p key={response.wine_id}> Marque: {response.option_name}</p>
          ))}
        </div>
        <Link to="/fourglass" className="buttonRegister">
          Retour
        </Link>
      </div>
    </>
  );
}

export default Profile;

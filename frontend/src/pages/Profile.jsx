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
        <h1>PROFIL</h1>
        <div className="INFORMATION">
          <h2>Informations du compte</h2>

          {informations.map((user) => (
            <div key={user.id}>
              <p>Nom: {user.lastname}</p>
              <p>Prénom: {user.firstname}</p>
              <p>Email: {user.email}</p>
              <p>Date de Naissance: {user.date_of_birth}</p>
            </div>
          ))}
        </div>

        <div className="gouts">
          <h2>Vos goûts</h2>
          {tastes.map((response) => (
            <div key={response.id}>
              <p>Marque: {response.option_id}</p>
            </div>
          ))}
        </div>
        <Link to="/">Retour</Link>
      </div>
    </>
  );
}

export default Profile;

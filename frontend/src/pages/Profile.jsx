import { IoIosWine } from "react-icons/io";
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
      <section className="profil">
        <div className="informations">
          <h2 className="title">Informations du compte</h2>

          {informations.map((user) => (
            <div key={user.id} className="userInfo">
              <div className="Nom information">
                <p>
                  <span className="informationSpan">Nom:</span> {user.lastname}
                </p>
              </div>
              <div className="Prenom information">
                <p>
                  <span className="informationSpan">Prénom:</span>{" "}
                  {user.firstname}
                </p>
              </div>
              <div className="Email information">
                <p>
                  <span className="informationSpan">Email:</span> {user.email}
                </p>
              </div>
              <div className="Gout information">
                <p>
                  <span className="informationSpan">
                    Préférence de goût
                    <IoIosWine /> :
                  </span>
                  {user.choice_of_tastes}
                </p>
              </div>
              <div className="Date information">
                <p>
                  <span className="informationSpan">Date de Naissance:</span>{" "}
                  {user.date_of_birth.slice(0, 10)}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="gouts">
          <h2 className="title">Vos goûts</h2>
          {tastes.map((response) => (
            <div key={response.id}>
              <p>Marque: {response.option_id}</p>
            </div>
          ))}
        </div>
        <Link to="/degustation" className="buttonReturn">
          Retour
        </Link>
      </section>
    </>
  );
}

export default Profile;

import { IoIosWine } from "react-icons/io";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useAuth } from "../contexts/AuthContext";
import "../App.scss";

function Profile() {
  const [tastes, setTastes] = useState([]);
  const [user, setUser] = useState();
  const [modification, setModification] = useState(false);
  const [updateMessage, setUpdateMessage] = useState({
    message: "",
    className: "",
  });
  const { token } = useAuth();

  const modificationHandler = () => {
    setModification((oldModification) => !oldModification);
  };

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
      .then((data) => {
        setUser(data);
      })
      .catch((error) => {
        console.error("Error fetching informations data:", error);
      });
  };

  const fetchModificationData = (event) => {
    event.preventDefault();
    fetch(
      `${import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5000"}/user`,
      {
        method: "put",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          lastname: user.lastname,
          firstname: user.firstname,
          email: user.email,
          numberPhone: user.numberPhone,
        }),
      }
    )
      .then((response) => {
        if (response.status === 204) {
          setUpdateMessage({
            message: "Les informations ont été mises à jour !",
            className: "validation",
          });
          setModification(!modification);
        } else {
          setUpdateMessage({
            message: "Une erreur s'est produite",
            className: "error",
          });
        }
      })
      .catch((error) => {
        console.error("Error", error);
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

          {user && (
            <form>
              <div key={user.id} className="userInfo">
                <div className="Nom information">
                  <span className="informationSpan">Nom:</span>
                  {!modification && <span>{user.lastname}</span>}
                  {modification && (
                    <input
                      type="text"
                      value={user.lastname}
                      onChange={(event) => {
                        setUser({ ...user, lastname: event.target.value });
                      }}
                    />
                  )}
                </div>
                <div className="Prenom information">
                  <span className="informationSpan">Prénom:</span>{" "}
                  {!modification && <span>{user.firstname}</span>}
                  {modification && (
                    <input
                      type="text"
                      value={user.firstname}
                      onChange={(event) => {
                        setUser({ ...user, firstname: event.target.value });
                      }}
                    />
                  )}
                </div>
                <div className="Email information">
                  <span className="informationSpan">Email:</span>
                  {!modification && <span>{user.email}</span>}
                  {modification && (
                    <input
                      type="text"
                      value={user.email}
                      onChange={(event) => {
                        setUser({ ...user, email: event.target.value });
                      }}
                    />
                  )}
                </div>
                <div className="Number information">
                  <span className="informationSpan">Numéro de téléphone :</span>
                  {!modification && <span>{user.numberPhone}</span>}
                  {modification && (
                    <input
                      type="text"
                      value={user.numberPhone}
                      onChange={(event) => {
                        setUser({ ...user, numberPhone: event.target.value });
                      }}
                    />
                  )}
                </div>
                <div className="Date information">
                  <p>
                    <span className="informationSpan">Date de Naissance:</span>{" "}
                    <span>
                      {user.date_of_birth
                        .slice(0, 10)
                        .split("-")
                        .reverse()
                        .join("-")}
                    </span>
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
              </div>
              <button
                type="button"
                className="register"
                onClick={
                  !modification
                    ? modificationHandler
                    : (event) => fetchModificationData(event)
                }
              >
                {modification ? "Envoyé" : "Modifier Les informations"}
              </button>
            </form>
          )}
        </div>
        {updateMessage.message && (
          <p className={updateMessage.className}>{updateMessage.message}</p>
        )}
        <div className="gouts">
          <h2 className="title">Vos goûts</h2>
          {tastes.map((response) => (
            <p className="information" key={response.wine_id}>
              {response.option_name}
            </p>
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

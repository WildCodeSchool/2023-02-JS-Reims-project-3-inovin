import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const userNameRef = useRef();
  const passwordRef = useRef();
  const emailRef = useRef();
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const dateOfBirthRef = useRef();

  const [selectedTaste, setSelectedTaste] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const userName = userNameRef.current.value;
    const password = passwordRef.current.value;
    const email = emailRef.current.value;
    const firstName = firstNameRef.current.value;
    const lastName = lastNameRef.current.value;
    const dateOfBirth = dateOfBirthRef.current.value;

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5000"}/users`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userName,
            password,
            email,
            firstName,
            lastName,
            dateOfBirth,
            choiceOfTastes: selectedTaste,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Une erreur s'est produite lors de l'inscription.");
      }
      navigate("/");
    } catch (error) {
      console.error("Erreur lors de l'inscription :", error);
      // Gérer l'erreur et afficher un message d'erreur à l'utilisateur si nécessaire
    }
  };

  const handleButtonClick = (taste) => {
    setSelectedTaste(taste);
  };

  return (
    <>
      <div className="PresInscip">
        <h1>INSCRIPTION</h1>
      </div>
      <form className="Inscription" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Nom d'utilisateur : </label>
          <input ref={userNameRef} type="text" id="username" name="username" />
        </div>
        <div>
          <label htmlFor="password">Mot de passe : </label>
          <input
            ref={passwordRef}
            type="password"
            id="password"
            name="password"
          />
        </div>
        <div>
          <label htmlFor="email">Email : </label>
          <input ref={emailRef} type="email" id="email" name="email" />
        </div>
        <div>
          <label htmlFor="firstName">Prénom : </label>
          <input
            ref={firstNameRef}
            type="text"
            id="firstName"
            name="firstName"
          />
        </div>
        <div>
          <label htmlFor="lastName">Nom :</label>
          <input ref={lastNameRef} type="text" id="lastName" name="lastName" />
        </div>
        <div>
          <label htmlFor="dateOfBirth">Date de naissance : </label>
          <input
            ref={dateOfBirthRef}
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
          />
        </div>
        <div>
          <label htmlFor="choiceOfTastes">Choix des goûts :</label>
          <div id="choiceOfTastes" className="taste-buttons">
            <button
              type="button"
              className={selectedTaste === "rouge" ? "selected" : ""}
              onClick={() => handleButtonClick("rouge")}
            >
              Rouge
            </button>
            <button
              type="button"
              className={selectedTaste === "blanc" ? "selected" : ""}
              onClick={() => handleButtonClick("blanc")}
            >
              Blanc
            </button>
          </div>
          <div id="choiceOfTastes" className="taste-buttons">
            <button
              type="button"
              className={selectedTaste === "doux" ? "selected" : ""}
              onClick={() => handleButtonClick("doux")}
            >
              Doux
            </button>
            <button
              type="button"
              className={selectedTaste === "boise" ? "selected" : ""}
              onClick={() => handleButtonClick("boise")}
            >
              Boisé
            </button>
          </div>
        </div>
        <button type="submit">S'inscrire</button>
      </form>
    </>
  );
}

export default Register;

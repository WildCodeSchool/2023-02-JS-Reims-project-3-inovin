import { useState, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import Logo from "../Pictures/logo3.png";

function Register() {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const dateOfBirthRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const [selectedTaste, setSelectedTaste] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const firstName = firstNameRef.current.value;
    const lastName = lastNameRef.current.value;
    const dateOfBirth = dateOfBirthRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    const currentDate = new Date();
    const selectedDate = new Date(dateOfBirth);

    const ageInYears = currentDate.getFullYear() - selectedDate.getFullYear();

    // Vérifier si l'utilisateur est mineur (moins de 18 ans)
    if (ageInYears < 18) {
      setErrorMessage("INTERDIT AUX -18 ANS !");
      return;
    }

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5000"}/users`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName,
            lastName,
            dateOfBirth,
            email,
            password,
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

  return (
    <form className="Inscription" onSubmit={handleSubmit}>
      <Link to="/">
        <img src={Logo} alt="Ino Vin" />
      </Link>
      <div className="PresInscip">
        <h1>INSCRIPTION</h1>
      </div>
      <div className={`form-group ${focused ? "focused" : ""}`}>
        <input
          placeholder="👤"
          onFocus={handleFocus}
          onBlur={handleBlur}
          className={filled ? "filled" : ""}
          ref={lastNameRef}
          type="text"
          id="lastName"
          name="lastName"
        />
        <label htmlFor="lastname" className="form-label">
          Nom de Famille
        </label>
      </div>
      <div className={`form-group ${focused ? "focused" : ""}`}>
        <input
          placeholder="👤"
          onFocus={handleFocus}
          onBlur={handleBlur}
          ref={firstNameRef}
          type="text"
          id="firstName"
          name="firstName"
        />
        <label htmlFor="firstname" className="form-label">
          Prénom
        </label>
      </div>
      <div className={`form-group ${focused ? "focused" : ""}`}>
        <input
          placeholder="✉️"
          onFocus={handleFocus}
          onBlur={handleBlur}
          ref={emailRef}
          type="email"
          id="email"
          name="email"
        />
        <label htmlFor="email" className="form-label">
          Adresse mail
        </label>
      </div>
      <div className={`form-group ${focused ? "focused" : ""}`}>
        <input
          placeholder="🗝️"
          onFocus={handleFocus}
          onBlur={handleBlur}
          ref={passwordRef}
          type="password"
          id="password"
          name="password"
        />
        <label htmlFor="password" className="form-label">
          Mot de Passe
        </label>
      </div>
      <div>
        <label htmlFor="dateOfBirth">Date de naissance </label>
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
          <button
            type="button"
            className={selectedTaste === "rosé" ? "selected" : ""}
            onClick={() => handleButtonClick("rosé")}
          >
            Rosé
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
          <button
            type="button"
            className={selectedTaste === "sec" ? "selected" : ""}
            onClick={() => handleButtonClick("sec")}
          >
            Sec
          </button>
        </div>
      </div>
      <div>
        <button className="register" type="submit">
          S'inscrire
        </button>
      </div>
      {errorMessage && <p>{errorMessage}</p>}
    </form>
  );
}

export default Register;

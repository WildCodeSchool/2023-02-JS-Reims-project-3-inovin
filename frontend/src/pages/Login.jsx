import { useRef, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Logo from "../Pictures/logo3.png";

function Login() {
  const usernameRef = useRef();
  const passwordRef = useRef();

  const { setToken } = useAuth();
  const navigate = useNavigate();

  const [focused, setFocused] = useState(false);
  const [filled, setFilled] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

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

  const handleLogin = (event) => {
    event.preventDefault();

    fetch(
      `${import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5000"}/login`,
      {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          username: usernameRef.current.value,
          password: passwordRef.current.value,
        }),
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Mail ou mot de passe incorrect"); // Lève une erreur si la réponse n'est pas réussie
        }
        return response.json();
      })
      .then((data) => {
        setToken(data.token);
        navigate("/fourglass"); // Redirection vers la page "Dashboard" après la connexion réussie
      })
      .catch((error) => {
        setErrorMessage(error.message); // Définit le message d'erreur
      });
  };

  return (
    <form className="Inscription" onSubmit={handleLogin}>
      <div className="PresInscip">
        <Link to="/">
          <img src={Logo} alt="Ino Vin" />
        </Link>
        <h1>CONNEXION</h1>
      </div>
      <div className={`form-group ${focused ? "focused" : ""}`}>
        <input
          ref={usernameRef}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className={filled ? "filled" : ""}
          type="text"
          id="email"
          name="email"
          placeholder="✉️"
        />
        <label htmlFor="email" className="form-label">
          Adresse mail
        </label>
      </div>
      <div className={`form-group ${focused ? "focused" : ""}`}>
        <input
          ref={passwordRef}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className={filled ? "filled" : ""}
          type="password"
          id="password"
          name="password"
          placeholder="🗝️"
        />
        <label htmlFor="password" className="form-label">
          Mot de Passe
        </label>
      </div>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <button className="register" type="submit">
        se connecter
      </button>
    </form>
  );
}

export default Login;

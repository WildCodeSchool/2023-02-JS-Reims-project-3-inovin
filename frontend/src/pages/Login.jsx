import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Logo from "../Pictures/logo3.png";

function Login() {
  const usernameRef = useRef();
  const passwordRef = useRef();

  const { setToken } = useAuth();
  const navigate = useNavigate();

  return (
    <form
      className="Inscription"
      onSubmit={(event) => {
        event.preventDefault();

        fetch(
          `${
            import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5000"
          }/login`,
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
          .then((response) => response.json())
          .then((data) => {
            setToken(data.token);
            navigate("/");
          });
      }}
    >
      <div className="PresInscip">
        <img src={Logo} alt="Ino Vin" />
        <h1>CONNEXION</h1>
      </div>
      <div>
        <label htmlFor="username">
          <input
            placeholder="Adresse mail ✉️"
            ref={usernameRef}
            type="text"
            id="username"
            name="username"
          />
        </label>
      </div>
      <div>
        <label htmlFor="password">
          <input
            placeholder="Mot de passe 🗝️"
            ref={passwordRef}
            type="password"
            id="password"
            name="password"
          />
        </label>
      </div>
      <button className="register" type="submit">
        se connecter
      </button>
    </form>
  );
}

export default Login;

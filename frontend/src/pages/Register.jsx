import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function Register() {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const emailRef = useRef();
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const dateOfBirthRef = useRef();

  const { setToken } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const username = usernameRef.current.value;
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
            username,
            password,
            email,
            firstName,
            lastName,
            dateOfBirth,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Une erreur s'est produite lors de l'inscription.");
      }

      const data = await response.json();
      setToken(data.token);
      navigate("/");
    } catch (error) {
      console.error("Erreur lors de l'inscription :", error);
      // Gérer l'erreur et afficher un message d'erreur à l'utilisateur si nécessaire
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Nom d'utilisateur</label>
        <input ref={usernameRef} type="text" id="username" name="username" />
      </div>
      <div>
        <label htmlFor="password">Mot de passe</label>
        <input
          ref={passwordRef}
          type="password"
          id="password"
          name="password"
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input ref={emailRef} type="email" id="email" name="email" />
      </div>
      <div>
        <label htmlFor="firstName">Prénom</label>
        <input ref={firstNameRef} type="text" id="firstName" name="firstName" />
      </div>
      <div>
        <label htmlFor="lastName">Nom</label>
        <input ref={lastNameRef} type="text" id="lastName" name="lastName" />
      </div>
      <div>
        <label htmlFor="dateOfBirth">Date de naissance</label>
        <input
          ref={dateOfBirthRef}
          type="date"
          id="dateOfBirth"
          name="dateOfBirth"
        />
      </div>
      <button type="submit">S'inscrire</button>
    </form>
  );
}

export default Register;

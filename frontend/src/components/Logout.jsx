import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function Logout() {
  const { setToken } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // Effectuer les étapes de déconnexion, par exemple, supprimer le token d'authentification
    setToken(null);

    // Rediriger vers la page d'accueil après la déconnexion
    navigate("/");
  }, [setToken, navigate]);

  return null; // Ou vous pouvez rendre un message de déconnexion réussie
}

export default Logout;

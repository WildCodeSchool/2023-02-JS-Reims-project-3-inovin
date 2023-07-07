import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Pictures/Logo.jpg";
import { useAuth } from "../contexts/AuthContext";
import deco from "../Pictures/deco.png";
import Profile from "../Pictures/profil.png";
import "../App.css";

export default function Navbar() {
  const { token, setToken } = useAuth();
  return (
    <nav className="header">
      <header />
      <img src={Logo} alt="Logo Ino'vin" />
      <h1>INO'VIN</h1>
      <nav>
        <ul>
          <li>
            {token == null ? (
              <>
                <Link to="/register" />
                <Link to="/login" />
              </>
            ) : (
              <>
                <Link to="/profile" className="logoprofil">
                  <img src={Profile} alt="Profil" />
                </Link>

                <Link
                  to="/logout"
                  className="deconnexion"
                  onClick={() => setToken(null)}
                >
                  <img src={deco} alt="deconnexion" />
                </Link>
              </>
            )}
          </li>
        </ul>
      </nav>
    </nav>
  );
}

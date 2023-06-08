import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { useAuth } from "./contexts/AuthContext";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Wine from "./pages/Wine";
import Navbar from "./components/Navbar";
import "./App.css";
import "./App.scss";

function App() {
  const { token, setToken } = useAuth();
  return (
    <div className="App">
      <Navbar />
      <ul>
        <li>
          <Link to="/">Home</Link>
          <Link to="/profile">Profil</Link>
          <Link to="/Wine">Wine</Link>
          <Link to="/contact">Contact</Link>
          {token == null ? (
            <>
              <Link to="/register">S'Inscrire</Link>
              <Link to="/login">Se connecter</Link>
            </>
          ) : (
            <button type="button" onClick={() => setToken(null)}>
              Déconnexion
            </button>
          )}
        </nav>
      </header>

      <main className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Wine" element={<Wine />} />
        </Routes>
      </nav>
    </div>
  );
}

export default App;

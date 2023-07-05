import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { useAuth } from "./contexts/AuthContext";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Wine from "./pages/Wine";
import FourGlass from "./pages/FourGlass";
import Questionnaire from "./pages/Questionnaire";
import Score from "./pages/Score";
import Logout from "./components/Logout";
import "./App.css";
import "./App.scss";

function App() {
  const { token, setToken } = useAuth();
  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            <li>
              {token == null ? (
                <>
                  <Link to="/register">S'Inscrire</Link>
                  <Link to="/login">Se connecter</Link>
                </>
              ) : (
                <Link to="/logout" onClick={() => setToken(null)}>
                  Déconnexion
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </header>

      <main className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/questionnaire" element={<Questionnaire />} />
          <Route path="/questionnaire/note" element={<Score />} />
          <Route path="/fourglass" element={<FourGlass />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Wine" element={<Wine />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

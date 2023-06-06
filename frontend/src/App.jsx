import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import FourGlass from "./pages/FourGlass";
import Questionnaire from "./pages/Questionnaire";
import "./App.css";

function App() {
  return (
    <>
      <header>
        <Navbar />
        <nav>
          <Link to="/">Home</Link>
          <Link to="/profile">Profil</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/FourGlass">FourGlass</Link>
        </nav>
      </header>

      <main className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Questionnaire" element={<Questionnaire />} />
          <Route path="/FourGlass" element={<FourGlass />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
    </>
  );
}

export default App;

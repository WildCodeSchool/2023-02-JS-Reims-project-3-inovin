import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Contact from "./pages/Contact";

import "./App.css";

function App() {
  return (
    <>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/profile">Profil</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>

      <main className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
    </>
  );
}

export default App;

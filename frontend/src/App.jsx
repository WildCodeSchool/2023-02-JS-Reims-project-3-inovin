import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Wine from "./pages/Wine";
import Navbar from "./components/Navbar";
import FourGlass from "./pages/FourGlass";
import Questionnaire from "./pages/Questionnaire";
import "./App.css";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <Navbar />
        </nav>
      </header>

      <main className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/questionnaire" element={<Questionnaire />} />
          <Route path="/fourglass" element={<FourGlass />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Wine" element={<Wine />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

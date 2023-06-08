import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Wine from "./pages/Wine";
import Navbar from "./components/Navbar";
import Questionnaire from "./components/Questionnaire";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Profile">Profile</Link>
        </li>
        <li>
          <Link to="/Wine">Wine</Link>
        </li>
      </ul>
      <nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Wine" element={<Wine />} />
        </Routes>
      </nav>
      <Questionnaire />
    </div>
  );
}

export default App;

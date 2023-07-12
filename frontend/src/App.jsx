import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Wine from "./pages/Wine";
import FourGlass from "./pages/FourGlass";
import Questionnaire from "./pages/Questionnaire";
import Score from "./pages/Score";
import Logout from "./components/Logout";
import Creation from "./pages/Creation";
import CreationRecap from "./pages/CreationRecap";
import AddWine from "./pages/AddWine";
import ViewWine from "./pages/ViewWine";
import "./App.css";
import "./App.scss";

function App() {
  return (
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
        <Route path="/ajouter-mes-vins" element={<AddWine />} />
        <Route path="/afficher-mes-vins" element={<ViewWine />} />
        <Route path="/atelier-creation" element={<Creation />} />
        <Route
          path="/atelier-creation/recapitulatif"
          element={<CreationRecap />}
        />
      </Routes>
    </main>
  );
}

export default App;

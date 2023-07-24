import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import GlassCard from "../components/GlassCard";
import Navbar from "../components/Navbar";
import { markCardCompleted } from "../components/glassCardReducer";

export default function FourGlass() {
  const [wines, setWines] = useState([]);
  const dispatch = useDispatch();
  const isCardCompleted = useSelector((state) => state);

  useEffect(() => {
    fetch(
      `${import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5000"}/wines`
    )
      .then((response) => response.json())
      .then((data) => {
        setWines(data);
      });
  }, []);

  const handleGlassCardClick = (cardKey) => {
    dispatch(markCardCompleted(cardKey));
  };

  const allCardsCompleted = Object.values(isCardCompleted).every(
    (value) => value
  );

  return (
    <>
      <Navbar />
      <section className="BackgroundGlass">
        <h1 className="title_4glasses">Affinez vos goûts</h1>

        <div className="glasses">
          {wines.slice(0, 4).map((wine, index) => (
            <GlassCard
              key={wine.id}
              wine={wine}
              isCompleted={isCardCompleted[`vin${index}`]}
              onClick={() => handleGlassCardClick(`vin${index}`)}
            />
          ))}
        </div>
        <div className="buttonDiv">
          <Link to="/atelier-creation">
            <button
              className="buttonFourGlass"
              type="button"
              disabled={!allCardsCompleted}
            >
              Passer à la page suivante
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}

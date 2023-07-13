import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import GlassCard from "../components/GlassCard";
import Navbar from "../components/Navbar";
import { markCardCompleted } from "../components/glassCardReducer";

export default function FourGlass() {
  const dispatch = useDispatch();
  const isCardCompleted = useSelector((state) => state);

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
          <GlassCard
            key="vin1"
            title="VIN 1"
            isCompleted={isCardCompleted.vin1}
            onClick={() => handleGlassCardClick("vin1")}
          />
          <GlassCard
            key="vin2"
            title="VIN 2"
            isCompleted={isCardCompleted.vin2}
            onClick={() => handleGlassCardClick("vin2")}
          />
          <GlassCard
            key="vin3"
            title="VIN 3"
            isCompleted={isCardCompleted.vin3}
            onClick={() => handleGlassCardClick("vin3")}
          />
          <GlassCard
            key="vin4"
            title="VIN 4"
            isCompleted={isCardCompleted.vin4}
            onClick={() => handleGlassCardClick("vin4")}
          />
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

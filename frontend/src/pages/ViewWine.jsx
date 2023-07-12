import React, { useEffect, useState } from "react";

export default function ViewWine() {
  const [wines, setWines] = useState([]);

  useEffect(() => {
    fetch(
      `${import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5000"}/wines`
    )
      .then((response) => response.json())
      .then((data) => {
        setWines(data);
      });
  }, []);

  return (
    <section className="adwines">
      <h1>Ajouter un vin</h1>
      {wines.map((wine) => (
        <div key={wine.id}>
          {wine.name},{wine.color}, {wine.grape_variety}
        </div>
      ))}
    </section>
  );
}

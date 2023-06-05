import React, { useEffect, useState } from "react";

function Wine() {
  const [wines, setWines] = useState([]);
  const [currentWineIndex, setCurrentWineIndex] = useState(0);

  const fetchWinesData = () => {
    fetch("http://localhost:5000/wines")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setWines(data);
      });
  };

  useEffect(() => {
    fetchWinesData();
  }, []);

  const handleNext = () => {
    setCurrentWineIndex((prevIndex) => (prevIndex + 1) % wines.length);
  };

  const handlePrevious = () => {
    setCurrentWineIndex(
      (prevIndex) => (prevIndex - 1 + wines.length) % wines.length
    );
  };

  return (
    <div>
      {wines.length > 0 && (
        <div>
          <button type="button" onClick={handlePrevious}>
            Précédent
          </button>
          <button type="button" onClick={handleNext}>
            Suivant
          </button>
          <div>
            <p>Nom: {wines[currentWineIndex].name}</p>
            <p>Variété de raisin: {wines[currentWineIndex].grape_variety}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Wine;

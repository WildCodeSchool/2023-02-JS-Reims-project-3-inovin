import "./Slider.css";

export default function SliderAcide() {
  return (
    <div className="Slider">
      <div className="div1">
        <h3>Acide Jeune</h3>
      </div>

      <div className="div3">
        <label htmlFor="Acide">Nerveuse</label>
        <label htmlFor="Acide">Pointue</label>
        <label htmlFor="Acide">Vive</label>
        <label htmlFor="Acide">Fraîche</label>
        <label htmlFor="Acide">Molle</label>
      </div>
      <div className="div4">
        <input
          className="Range"
          id="Acide"
          type="range"
          orient="vertical"
          min={0}
          max={4}
        />
      </div>

      <div className="div2">
        <h3> Acide Vieux</h3>
      </div>
    </div>
  );
}

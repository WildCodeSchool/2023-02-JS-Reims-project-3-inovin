import "./Slider.css";

export default function SliderAlcool() {
  return (
    <div className="Slider">
      <div className="div1">
        <h3>+ Alcool</h3>
      </div>

      <div className="div3">
        <label htmlFor="Alcool">Alcooleux</label>
        <label htmlFor="Alcool">Capiteux</label>
        <label htmlFor="Alcool">Gras</label>
        <label htmlFor="Alcool">Généreux</label>
        <label htmlFor="Alcool">Faible</label>
      </div>
      <div className="div4">
        <input
          className="Range"
          id="Alcool"
          type="range"
          orient="vertical"
          min={0}
          max={4}
        />
      </div>

      <div className="div2">
        <h3>- Alcool</h3>
      </div>
    </div>
  );
}

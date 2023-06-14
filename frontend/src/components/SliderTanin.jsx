import "./Slider.css";

export default function SliderTanin() {
  return (
    <div className="Slider">
      <div className="div1">
        <h3> Tanin Jeune</h3>
      </div>

      <div className="div3">
        <label htmlFor="Tanin">Âpre</label>
        <label htmlFor="Tanin">Chargé</label>
        <label htmlFor="Tanin">Charpenté</label>
        <label htmlFor="Tanin">Fondu</label>
        <label htmlFor="Tanin">Lisse</label>
      </div>
      <div className="div4">
        <input
          className="Range"
          id="Tanin"
          type="range"
          orient="vertical"
          min={0}
          max={4}
        />
      </div>

      <div className="div2">
        <h3> Tanin Vieux</h3>
      </div>
    </div>
  );
}

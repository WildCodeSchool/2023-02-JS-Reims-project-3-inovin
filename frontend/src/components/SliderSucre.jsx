import "./Slider.css";

export default function SliderSucre() {
  return (
    <div className="Slider">
      <div className="div1">
        <h3>+ sucré</h3>
      </div>

      <div className="div3">
        <label htmlFor="sucre">Sirupeux</label>
        <label htmlFor="sucre">Liquoreux</label>
        <label htmlFor="sucre">Moelleux</label>
        <label htmlFor="sucre">Doux</label>
        <label htmlFor="sucre">Sec</label>
      </div>
      <div className="div4">
        <input
          className="Range"
          id="sucre"
          type="range"
          orient="vertical"
          min={0}
          max={4}
        />
      </div>

      <div className="div2">
        <h3>- sucré</h3>
      </div>
    </div>
  );
}

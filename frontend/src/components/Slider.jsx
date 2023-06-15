import "./Slider.css";

const questions = [
  {
    title: "Acide Jeune",
    type: "Range",
    response1: "Nerveuse",
    response2: "Pointue",
    response3: "Vive",
    response4: "Fraîche",
    response5: "Molle",
    title1: "Acide Vieux",
  },
  {
    title: "+ Alcool",
    type: "Range",
    response1: "Alcooleux",
    response2: "Capiteux",
    response3: "Gras",
    response4: "Généreux",
    response5: "Faible",
    title1: "- Alcool",
  },
];

export default function SliderAcide() {
  return (
    <>
      {questions.map((question) => (
        <div className="Slider">
          <div className="div1">
            <h3>{question.title}</h3>
          </div>

          <div className="div3">
            <label htmlFor="Acide">{question.response1}</label>
            <label htmlFor="Acide">{question.response2}</label>
            <label htmlFor="Acide">{question.response3}</label>
            <label htmlFor="Acide">{question.response4}</label>
            <label htmlFor="Acide">{question.response5}</label>
          </div>
          <div className="div4">
            <input
              className="Range"
              id="Acide"
              type={question.type}
              orient="vertical"
              min={0}
              max={4}
            />
          </div>

          <div className="div2">
            <h3>{question.title1}</h3>
          </div>
        </div>
      ))}
    </>
  );
}

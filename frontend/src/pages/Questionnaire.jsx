import { useState } from "react";
import { Link } from "react-router-dom";
import "./Checkbox.css";
import Visuel from "../Pictures/Vue.png";
import Olfatif from "../Pictures/Odorat.png";
import Gustatif from "../Pictures/Gout.png";
import Slider from "../components/Slider";
import Navbar from "../components/Navbar";

const questions = [
  {
    categoryTitle: "Examen Visuel",
    categoryIcon: Visuel,
    categoryIconAlt: "Oeil",
    questions: [
      {
        title: "Couleur et nuances",
        type: "checkbox",
        responses: [
          "Framboise",
          "Jaune Vert",
          "Cerise",
          "Jaune Paille",
          "Rubis",
          "Or Vert",
          "Pourpre",
          "Or Jaune",
          "Violet",
          "Dore",
          "Grenat",
          "Ambre",
          "Tuile",
          "Roux",
        ],
      },
      {
        title: "Brillance",
        type: "checkbox",
        responses: ["Etincelante", "Eclatante"],
      },
      {
        title: "Fluidité des larmes",
        type: "checkbox",
        responses: ["Fines et Fluides", "Larges et Visuqueuse"],
      },
      {
        title: "Intensité de la couleur",
        type: "checkbox",
        responses: ["Claire", "Moyenne", "Trouble", "Opaque"],
      },
    ],
  },
  {
    categoryTitle: "Examen Olfactif",
    categoryIcon: Olfatif,
    categoryIconAlt: "Nez",
    questions: [
      {
        title: "Intensité des arômes",
        type: "checkbox",
        responses: ["Faible, vin fermé", "Moyenne", "Forte, vin ouvert"],
      },
      {
        title: "Impression",
        type: "checkbox",
        responses: ["Franc", "Simple", "Douteux", "Défaut"],
      },
      {
        title: "Familles Arômatiques",
        type: "checkbox",
        responses: [
          "Fruits",
          "Fleurs",
          "Epices",
          "Végétaux",
          "Empyreumatiques",
          "Animal",
          "Défaut",
        ],
      },
    ],
  },
  {
    categoryTitle: "Examen Gustatif",
    categoryIcon: Gustatif,
    categoryIconAlt: "Bouche",
    questions: [
      {
        title: "Structure",
        type: "checkbox",
        responses: ["Léger", "Fluide", "Charpenté"],
      },
      {
        title: "Persistance Arômatique",
        type: "checkbox",
        responses: ["Courte", "Moyenne", "Persistante"],
      },
      {
        title: "Acide Jeune",
        type: "range",
        responses: ["Nerveuse", "Pointue", "Vive", "Fraîche", "Molle"],
      },
      {
        title: "Alcool",
        type: "range",
        responses: ["Alcooleux", "Capiteux", "Gras", "Généreux", "Faible"],
      },
    ],
  },
];

export default function Questionnaire() {
  const [formState, setFormState] = useState({
    "Couleur et nuances": "",
    Brillance: "",
    "Fluidité des larmes": "",
    "Intensité de la couleur": "",
    "Intensité des arômes": "",
    Impression: "",
    "Familles Arômatiques": "",
    Structure: "",
    "Persistance Arômatiques": "",
    "Acide Jeune": "",
    Alcool: "",
  });

  const [currentPart, setCurrentPart] = useState(0);

  const HandleNextClick = () => {
    setCurrentPart(currentPart + 1);
  };

  const HandlePreviousClick = () => {
    setCurrentPart(currentPart - 1);
  };

  const currentQuestions = questions[currentPart];

  return (
    <>
      <Navbar />
      <form className="Questionnaire">
        <div>
          <h2>
            {currentQuestions.categoryTitle}
            <img
              className="QuestionnaireImage"
              src={currentQuestions.categoryIcon}
              alt={currentQuestions.categoryIconAlt}
            />
          </h2>
          {currentQuestions.questions.map((question) => (
            <div key={question.title}>
              <h3 className="titre">{question.title}</h3>
              {question.type === "range" ? (
                <Slider
                  question={question}
                  formState={formState}
                  setFormState={setFormState}
                />
              ) : (
                <div className="Questions">
                  {question.responses.map((response) => (
                    <div className="checkbox-1" key={response}>
                      <label className="QuestionnaireChoix">
                        {question.type === "checkbox" && (
                          <input
                            id={response.replaceAll(" ", "")}
                            type={question.type}
                            checked={formState[question.title] === response}
                            onChange={(event) =>
                              setFormState({
                                ...formState,
                                [question.title]: event.target.checked
                                  ? response
                                  : "",
                              })
                            }
                          />
                        )}
                        {question.type === "text" && (
                          <input
                            id={response.replaceAll(" ", "")}
                            type={question.type}
                            value={formState[question.title]}
                            onChange={(event) =>
                              setFormState({
                                ...formState,
                                [question.title]: event.target.value,
                              })
                            }
                          />
                        )}
                        {response}
                      </label>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
          {currentPart < 2 && (
            <div className="QuestBut">
              <button
                className="QuestionnaireButton"
                type="button"
                onClick={HandleNextClick}
              >
                Suivant
              </button>
            </div>
          )}
          {currentPart >= 2 && (
            <div className="QuestBut">
              <Link to="/questionnaire/note">
                <button
                  className="QuestionnaireButton"
                  type="button"
                  onClick={HandleNextClick}
                >
                  Validé
                </button>
              </Link>
            </div>
          )}
          {currentPart > 0 && (
            <div className="QuestBut">
              <button
                className="QuestionnaireButton"
                type="button"
                onClick={HandlePreviousClick}
              >
                Précédent
              </button>
            </div>
          )}
        </div>
      </form>
    </>
  );
}

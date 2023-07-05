import { useState } from "react";
import { Link } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import "./Checkbox.css";
import Visuel from "../Pictures/Vue.png";
import Olfatif from "../Pictures/Odorat.png";
import Gustatif from "../Pictures/Gout.png";
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
        title: "Acide",
        type: "range",
        responses: [" "],
      },
    ],
  },
];

const marks = [
  {
    title: "Acide",
    slider: [
      {
        value: 0,
        label: "Acide Jeune",
      },
      {
        value: 1,
        label: "Nerveuse",
      },
      {
        value: 2,
        label: "Pointue",
      },
      {
        value: 3,
        label: "Vive",
      },
      {
        value: 4,
        label: "Fraîche",
      },
      {
        value: 5,
        label: "Molle",
      },
      {
        value: 6,
        label: "Acide Vieux",
      },
    ],
  },
  {
    title: "Alcool",
    slider: [
      {
        value: 0,
        label: "Alcool -",
      },
      {
        value: 1,
        label: "Alcooleux",
      },
      {
        value: 2,
        label: "Capiteux",
      },
      {
        value: 3,
        label: "Gras",
      },
      {
        value: 4,
        label: "Généreux",
      },
      {
        value: 5,
        label: "Faible",
      },
      {
        value: 6,
        label: "Alcool +",
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
                <Stack sx={{ height: 200 }} spacing={12} direction="row">
                  {marks.map((mark) => (
                    <Slider
                      aria-label={mark.title}
                      orientation="vertical"
                      valueLabelDisplay="auto"
                      onChange={(event) =>
                        setFormState({
                          ...formState,
                          [question.title]: event.target.value,
                        })
                      }
                      marks={mark.slider}
                      min={0}
                      max={6}
                    />
                  ))}
                </Stack>
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

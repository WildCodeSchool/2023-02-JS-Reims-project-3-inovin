import { useState } from "react";
// import CouleurFramb from "../Images/Couleur-Framb.jpg";

export default function Questionnaire() {
  const [formState, setFormState] = useState({
    part1: "",
    part2: "",
    part3: "",
  });

  const [currentPart, setCurrentPart] = useState(1);
  const HandleNextClick = () => {
    setCurrentPart(currentPart + 1);
  };

  const HandlePreviousClick = () => {
    setCurrentPart(currentPart - 1);
  };

  return (
    <>
      <h1>Questionnaire</h1>
      <form className="Questionnaire">
        <div>
          {currentPart === 1 && (
            <div>
              <h2>Examen Visuel</h2>
              <h3>Couleur et nuances</h3>
              <div className="QuestionnaireCheckbox DivTest">
                <label className="QuestionnaireChoix">
                  <input
                    type="checkbox"
                    value={formState.part1}
                    onChange={(event) =>
                      setFormState({ ...formState, part1: event.target.value })
                    }
                  />
                  <img
                    className="QuestionnaireCouleur"
                    // src={CouleurFramb}
                    alt="Framboise couleur"
                  />
                  Framboise
                </label>
              </div>
              <h3>Intensité de la couleur</h3>
              <div className="QuestionnaireCheckbox DivTest">
                <label className="QuestionnaireChoix">
                  <input
                    type="checkbox"
                    value={formState.part1}
                    onChange={(event) =>
                      setFormState({ ...formState, part1: event.target.value })
                    }
                  />
                  fines et fluides
                </label>
              </div>
              <h3>Fluidité des larmes</h3>
              <div className="QuestionnaireCheckbox DivTest">
                <label className="QuestionnaireChoix">
                  <input
                    type="checkbox"
                    value={formState.part1}
                    onChange={(event) =>
                      setFormState({ ...formState, part1: event.target.value })
                    }
                  />
                  Claire
                </label>
              </div>
              <div className="QuestBut">
                <button
                  className="QuestionnaireButton"
                  type="button"
                  onClick={HandleNextClick}
                >
                  Suivant
                </button>
              </div>
            </div>
          )}
        </div>
        <div>
          {currentPart === 2 && (
            <div>
              <h2>Examen Olfactif</h2>
              <h3>Intensité des arômes</h3>
              <div className="QuestionnaireCheckbox DivTest">
                <label className="QuestionnaireChoix">
                  <input
                    type="checkbox"
                    value={formState.part2}
                    onChange={(event) =>
                      setFormState({ ...formState, part2: event.target.value })
                    }
                  />
                  Faible, vin fermé
                </label>
              </div>
              <h3>Familles arômatiques</h3>
              <div className="QuestionnaireCheckbox DivTest">
                <label className="QuestionnaireChoix">
                  <input
                    type="checkbox"
                    value={formState.part2}
                    onChange={(event) =>
                      setFormState({ ...formState, part2: event.target.value })
                    }
                  />
                  Fruits
                </label>
              </div>
              <h3>Arômes</h3>
              <div>
                <label className="QuestionnaireChoix">
                  <input
                    type="text"
                    maxLength={100}
                    value={formState.part2}
                    onChange={(event) =>
                      setFormState({ ...formState, part2: event.target.value })
                    }
                  />
                </label>
              </div>
              <div className="QuestBut">
                <button
                  className="QuestionnaireButton"
                  type="button"
                  onClick={HandlePreviousClick}
                >
                  Précédent
                </button>
                <button
                  className="QuestionnaireButton"
                  type="button"
                  onClick={HandleNextClick}
                >
                  Suivant
                </button>
              </div>
            </div>
          )}
        </div>
        <div>
          {currentPart === 3 && (
            <div>
              <h2>Examen gustatif</h2>
              <h3>Saveurs</h3>
              <div className="QuestionnaireCheckbox DivTest">
                <label className="QuestionnaireChoix">
                  <input
                    type="checkbox"
                    value={formState.part3}
                    onChange={(event) =>
                      setFormState({ ...formState, part3: event.target.value })
                    }
                  />
                  Acidité
                </label>
              </div>
              <h3>Structure</h3>
              <div className="QuestionnaireCheckbox DivTest">
                <label className="QuestionnaireChoix">
                  <input
                    type="checkbox"
                    value={formState.part3}
                    onChange={(event) =>
                      setFormState({ ...formState, part3: event.target.value })
                    }
                  />
                  Léger
                </label>
              </div>
              <h3>Persistances arômatiques</h3>
              <div className="QuestionnaireCheckbox DivTest">
                <label className="QuestionnaireChoix">
                  <input
                    type="checkbox"
                    value={formState.part3}
                    onChange={(event) =>
                      setFormState({ ...formState, part3: event.target.value })
                    }
                  />
                  Courte
                </label>
              </div>
              <h3>Arômes</h3>
              <div>
                <label className="QuestionnaireChoix">
                  <input
                    type="text"
                    maxLength={100}
                    value={formState.part3}
                    onChange={(event) =>
                      setFormState({ ...formState, part3: event.target.value })
                    }
                  />
                </label>
              </div>
              <h3>Equilibre</h3>
              <div>
                <label className="QuestionnaireChoix">
                  <input
                    type="text"
                    maxLength={100}
                    value={formState.part3}
                    onChange={(event) =>
                      setFormState({ ...formState, part3: event.target.value })
                    }
                  />
                </label>
              </div>
              <div className="QuestBut">
                <button
                  className="QuestionnaireButton"
                  type="button"
                  onClick={HandlePreviousClick}
                >
                  Précédent
                </button>
                {/* Route React à ajouté entre la balise button validé */}
                <button className="QuestionnaireButton" type="button">
                  Validé
                </button>
              </div>
            </div>
          )}
        </div>
      </form>
    </>
  );
}

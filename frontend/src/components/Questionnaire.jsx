import { useState } from "react";
import Framboise from "../Images/framboise.jpg";
import Cerise from "../Images/cerise.jpg";
import Rubis from "../Images/rubis.jpg";
import Pourpre from "../Images/pourpre.jpg";
import Violet from "../Images/violet.jpg";
import Grenat from "../Images/grenat.jpg";
import Tuile from "../Images/tuilé.png";
import JauneVert from "../Images/jauneVert.png";
import JaunePaille from "../Images/JaunePaille.png";
import OrVert from "../Images/OrVert.png";
import OrJaune from "../Images/OrJaune.png";
import Dore from "../Images/Dore.png";
import Ambre from "../Images/Ambre.png";
import Roux from "../Images/Roux.png";

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
      <h1 className="bl">Questionnaire</h1>
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
                    src={Framboise}
                    alt="Framboise couleur"
                  />
                  Framboise
                </label>
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
                    src={Cerise}
                    alt="Cerise couleur"
                  />
                  Cerise
                </label>
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
                    src={Rubis}
                    alt="Rubis couleur"
                  />
                  Rubis
                </label>
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
                    src={Pourpre}
                    alt="Pourpre couleur"
                  />
                  Pourpre
                </label>
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
                    src={Violet}
                    alt="Violet couleur"
                  />
                  Violet
                </label>
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
                    src={Grenat}
                    alt="Grenat couleur"
                  />
                  Grenat
                </label>
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
                    src={Tuile}
                    alt="Tuilé couleur"
                  />
                  Tuilé
                </label>
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
                    src={JauneVert}
                    alt="Jaune Vert couleur"
                  />
                  Jaune Vert
                </label>
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
                    src={JaunePaille}
                    alt="Jaune Paille couleur"
                  />
                  Jaune Paille
                </label>
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
                    src={OrVert}
                    alt="OrVert couleur"
                  />
                  Or Vert
                </label>
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
                    src={OrJaune}
                    alt="Or Jaune couleur"
                  />
                  Or Jaune
                </label>
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
                    src={Dore}
                    alt="Doré couleur"
                  />
                  Doré
                </label>
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
                    src={Ambre}
                    alt="Ambré couleur"
                  />
                  Ambré
                </label>
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
                    src={Roux}
                    alt="Roux couleur"
                  />
                  Roux
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
                  fines et fluides
                </label>
                <label className="QuestionnaireChoix">
                  <input
                    type="checkbox"
                    value={formState.part1}
                    onChange={(event) =>
                      setFormState({ ...formState, part1: event.target.value })
                    }
                  />
                  Larges et Visqueuses
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
                  Claire
                </label>
                <label className="QuestionnaireChoix">
                  <input
                    type="checkbox"
                    value={formState.part1}
                    onChange={(event) =>
                      setFormState({ ...formState, part1: event.target.value })
                    }
                  />
                  Moyenne
                </label>
                <label className="QuestionnaireChoix">
                  <input
                    type="checkbox"
                    value={formState.part1}
                    onChange={(event) =>
                      setFormState({ ...formState, part1: event.target.value })
                    }
                  />
                  Trouble
                </label>
                <label className="QuestionnaireChoix">
                  <input
                    type="checkbox"
                    value={formState.part1}
                    onChange={(event) =>
                      setFormState({ ...formState, part1: event.target.value })
                    }
                  />
                  Opaque
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
                <label className="QuestionnaireChoix">
                  <input
                    type="checkbox"
                    value={formState.part2}
                    onChange={(event) =>
                      setFormState({ ...formState, part2: event.target.value })
                    }
                  />
                  Moyenne
                </label>
                <label className="QuestionnaireChoix">
                  <input
                    type="checkbox"
                    value={formState.part2}
                    onChange={(event) =>
                      setFormState({ ...formState, part2: event.target.value })
                    }
                  />
                  Forte, vin ouvert
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
                <label className="QuestionnaireChoix">
                  <input
                    type="checkbox"
                    value={formState.part2}
                    onChange={(event) =>
                      setFormState({ ...formState, part2: event.target.value })
                    }
                  />
                  Fleurs
                </label>
                <label className="QuestionnaireChoix">
                  <input
                    type="checkbox"
                    value={formState.part2}
                    onChange={(event) =>
                      setFormState({ ...formState, part2: event.target.value })
                    }
                  />
                  Epices
                </label>
                <label className="QuestionnaireChoix">
                  <input
                    type="checkbox"
                    value={formState.part2}
                    onChange={(event) =>
                      setFormState({ ...formState, part2: event.target.value })
                    }
                  />
                  Végétaux
                </label>
                <label className="QuestionnaireChoix">
                  <input
                    type="checkbox"
                    value={formState.part2}
                    onChange={(event) =>
                      setFormState({ ...formState, part2: event.target.value })
                    }
                  />
                  Empyreumatiques
                </label>
                <label className="QuestionnaireChoix">
                  <input
                    type="checkbox"
                    value={formState.part2}
                    onChange={(event) =>
                      setFormState({ ...formState, part2: event.target.value })
                    }
                  />
                  Animal
                </label>
                <label className="QuestionnaireChoix">
                  <input
                    type="checkbox"
                    value={formState.part2}
                    onChange={(event) =>
                      setFormState({ ...formState, part2: event.target.value })
                    }
                  />
                  Défauts
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
                <label className="QuestionnaireChoix">
                  <input
                    type="checkbox"
                    value={formState.part3}
                    onChange={(event) =>
                      setFormState({ ...formState, part3: event.target.value })
                    }
                  />
                  Amer
                </label>
                <label className="QuestionnaireChoix">
                  <input
                    type="checkbox"
                    value={formState.part3}
                    onChange={(event) =>
                      setFormState({ ...formState, part3: event.target.value })
                    }
                  />
                  Sucre
                </label>
                <label className="QuestionnaireChoix">
                  <input
                    type="checkbox"
                    value={formState.part3}
                    onChange={(event) =>
                      setFormState({ ...formState, part3: event.target.value })
                    }
                  />
                  Gras
                </label>
                <label className="QuestionnaireChoix">
                  <input
                    type="checkbox"
                    value={formState.part3}
                    onChange={(event) =>
                      setFormState({ ...formState, part3: event.target.value })
                    }
                  />
                  Alcool
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
                <label className="QuestionnaireChoix">
                  <input
                    type="checkbox"
                    value={formState.part3}
                    onChange={(event) =>
                      setFormState({ ...formState, part3: event.target.value })
                    }
                  />
                  Fluide
                </label>
                <label className="QuestionnaireChoix">
                  <input
                    type="checkbox"
                    value={formState.part3}
                    onChange={(event) =>
                      setFormState({ ...formState, part3: event.target.value })
                    }
                  />
                  Charpenté
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
                <label className="QuestionnaireChoix">
                  <input
                    type="checkbox"
                    value={formState.part3}
                    onChange={(event) =>
                      setFormState({ ...formState, part3: event.target.value })
                    }
                  />
                  Moyenne
                </label>{" "}
                <label className="QuestionnaireChoix">
                  <input
                    type="checkbox"
                    value={formState.part3}
                    onChange={(event) =>
                      setFormState({ ...formState, part3: event.target.value })
                    }
                  />
                  Persistante
                </label>
              </div>
              {/* <h3>Arômes</h3>
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
              </div> */}
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

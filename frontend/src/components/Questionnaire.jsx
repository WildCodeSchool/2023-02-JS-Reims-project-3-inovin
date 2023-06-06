import { useState } from "react";
import "./Checkbox.css";
import Visuel from "../Pictures/Vue.png";
import Olfatif from "../Pictures/Odorat.png";
import Gustatif from "../Pictures/Gout.png";

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
    <form className="Questionnaire">
      <div>
        {currentPart === 1 && (
          <div>
            <h2>
              Examen Visuel
              <img className="QuestionnaireImage" src={Visuel} alt="Oeil" />
            </h2>
            <h3>Couleur et nuances</h3>
            <div className="DivTest checkbox-1">
              <label className="QuestionnaireChoix">
                <input
                  id="Framb"
                  type="checkbox"
                  value={formState.part1}
                  onChange={(event) =>
                    setFormState({ ...formState, part1: event.target.value })
                  }
                />
                Framboise
              </label>
              <label className="QuestionnaireChoix">
                <input
                  id="JauneVert"
                  type="checkbox"
                  value={formState.part1}
                  onChange={(event) =>
                    setFormState({ ...formState, part1: event.target.value })
                  }
                />
                Jaune Vert
              </label>
              <label className="QuestionnaireChoix">
                <input
                  id="Cerise"
                  type="checkbox"
                  value={formState.part1}
                  onChange={(event) =>
                    setFormState({ ...formState, part1: event.target.value })
                  }
                />
                Cerise
              </label>
            </div>
            <h3>Fluidité des larmes</h3>
            <div className="DivTest checkbox-1">
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
            <div className="DivTest checkbox-1">
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
            <h2>
              Examen Olfactif
              <img className="QuestionnaireImageNez" src={Olfatif} alt="Nez" />
            </h2>
            <h3>Intensité des arômes</h3>
            <div className="DivTest checkbox-1">
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
            <h3>Impression</h3>
            <div className="DivTest checkbox-1">
              <label className="QuestionnaireChoix">
                <input
                  type="checkbox"
                  value={formState.part2}
                  onChange={(event) =>
                    setFormState({ ...formState, part2: event.target.value })
                  }
                />
                Complexe
              </label>
              <label className="QuestionnaireChoix">
                <input
                  type="checkbox"
                  value={formState.part2}
                  onChange={(event) =>
                    setFormState({ ...formState, part2: event.target.value })
                  }
                />
                Franc
              </label>
              <label className="QuestionnaireChoix">
                <input
                  type="checkbox"
                  value={formState.part2}
                  onChange={(event) =>
                    setFormState({ ...formState, part2: event.target.value })
                  }
                />
                Simple
              </label>
              <label className="QuestionnaireChoix">
                <input
                  type="checkbox"
                  value={formState.part2}
                  onChange={(event) =>
                    setFormState({ ...formState, part2: event.target.value })
                  }
                />
                Douteux
              </label>
              <label className="QuestionnaireChoix">
                <input
                  type="checkbox"
                  value={formState.part2}
                  onChange={(event) =>
                    setFormState({ ...formState, part2: event.target.value })
                  }
                />
                Défaut
              </label>
            </div>
            <h3>Familles arômatiques</h3>
            <div className="DivTest checkbox-1">
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
            <h2>
              Examen gustatif
              <img className="QuestionnaireImage" src={Gustatif} alt="Bouche" />
            </h2>
            <h3>Saveurs</h3>
            <div className="DivTest checkbox-1">
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
            <div className="DivTest checkbox-1">
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
            <div className="DivTest checkbox-1">
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
  );
}

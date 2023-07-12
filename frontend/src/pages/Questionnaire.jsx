import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Visuel from "../Pictures/Vue.png";
import Olfatif from "../Pictures/Odorat.png";
import Gustatif from "../Pictures/Gout.png";
import Navbar from "../components/Navbar";
import "./Checkbox.css";

const CategoryComponents = {
  Visuel,
  Olfatif,
  Gustatif,
};

export default function Questionnaire() {
  const [data, setData] = useState([]);
  const [formState, setFormState] = useState({});
  const [currentPart, setCurrentPart] = useState(0);

  useEffect(() => {
    fetch("http://localhost:5000/options")
      .then((response) => response.json())
      .then((responseData) => {
        const processedData = {};
        responseData.forEach(
          ({
            option_name: optionName,
            question_title: questionTitle,
            category_name: categoryName,
          }) => {
            if (!processedData[categoryName]) {
              processedData[categoryName] = { questions: [] };
            }
            let question = processedData[categoryName].questions.find(
              (q) => q.title === questionTitle
            );
            if (!question) {
              question = {
                title: questionTitle,
                type: "checkbox",
                responses: [],
              };
              processedData[categoryName].questions.push(question);
            }
            question.responses.push(optionName);
          }
        );
        setData(
          Object.entries(processedData).map(([categoryTitle, value]) => ({
            categoryTitle,
            ...value,
          }))
        );
      });
  }, []);

  const HandleNextClick = () => {
    setCurrentPart(currentPart + 1);
  };

  const HandlePreviousClick = () => {
    setCurrentPart(currentPart - 1);
  };

  const currentQuestions = data[currentPart];

  if (!currentQuestions) return null;

  // Get the component for the current category
  const CategoryComponent = CategoryComponents[currentQuestions.categoryTitle];

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch("http://localhost:5000/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formState),
    });

    if (response.ok) {
      alert("Le formulaire a été soumis avec succès !");
    } else {
      alert("Il y a eu une erreur lors de la soumission du formulaire.");
    }
  };

  return (
    <div className="backgroundQuestionnaire">
      <Navbar />
      <form className="Questionnaire" onSubmit={handleSubmit}>
        <div>
          <h2>{currentQuestions.categoryTitle}</h2>
          {CategoryComponent && <CategoryComponent />}
          {currentQuestions.questions.map((question) => (
            <div key={question.title}>
              <h3 className="titre">{question.title}</h3>
              <div className="Questions">
                {question.responses.map((response) => (
                  <div className="checkbox-1" key={response}>
                    <label className="QuestionnaireChoix">
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
                      {response}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          ))}
          {currentPart < data.length - 1 && (
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
          {currentPart >= data.length - 1 && (
            <div className="QuestBut">
              <Link to="/questionnaire/note">
                <button className="QuestionnaireButton" type="submit">
                  Validé
                </button>
              </Link>
            </div>
          )}
        </div>
      </form>
    </div>
  );
}

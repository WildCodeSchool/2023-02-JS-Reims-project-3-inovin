import React, { useEffect, useState } from "react";

function WineTastingForm() {
  const [questions, setQuestions] = useState({});

  useEffect(() => {
    fetch("http://localhost:3050/questions")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setQuestions(data);
      });
  }, []);

  return (
    <div>
      {Object.keys(questions).map((section) => (
        <div key={section}>
          <h2>{section}</h2>
          {Object.keys(questions[section]).map((question) => (
            <div key={question}>
              <h3>{question}</h3>
              {Object.keys(questions[section][question]).map((option) => (
                <div key={option}>
                  <input type="checkbox" id={option} name={option} />
                  <label htmlFor={option}>{option}</label>
                </div>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default WineTastingForm;

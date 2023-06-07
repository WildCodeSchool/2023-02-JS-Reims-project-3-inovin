import React, { useEffect, useState } from "react";

function WineTastingForm() {
  const [options, setOptions] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3050/options")
      .then((response) => response.json())
      .then((data) => {
        setOptions(data);
      });
  }, []);

  if (!options) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {Object.keys(options).map((section) => (
        <div key={section}>
          <h2>{section}</h2>
          {options[section] &&
            Object.keys(options[section]).map((optionName) => (
              <div key={optionName}>
                <h3>{optionName}</h3>
                {options[section][optionName] &&
                  Object.keys(options[section][optionName]).map((option) => (
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

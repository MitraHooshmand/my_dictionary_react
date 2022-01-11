import React from "react";

export default function Meaning(param) {
  if (param.meaning) {
    return (
      <div className="Meaning">
        <h5>{param.meaning.partOfSpeech}</h5>
        {param.meaning.definitions.map(function (definition, index) {
          return (
            <div key={index}>
              <p>
                {" "}
                {definition.definition}
                <br />
                <em>__ {definition.example}</em>
                <br />
                ** {definition.synonyms[0]}
              </p>
            </div>
          );
        })}
      </div>
    );
  } else return null;
}

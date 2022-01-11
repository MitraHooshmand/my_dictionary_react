import React from "react";
import Synonym from "./Synonym";

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
                <strong>Def: </strong>
                 {definition.definition}
                <br />
                <em>
                <strong>Exam: </strong>
                  {definition.example}
                </em>
                <br />
                <strong>Syn: </strong>
                <small>
                  <Synonym synonym={definition.synonyms} />
                </small>
              </p>
            </div>
          );
        })}
      </div>
    );
  } else return null;
}

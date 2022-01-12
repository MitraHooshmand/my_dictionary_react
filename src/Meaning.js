import React from "react";
import Synonym from "./Synonym";
import "./Meaning.css";

export default function Meaning(param) {
  if (param.meaning) {
    return (
      <div className="Meaning">
        <h5>{param.meaning.partOfSpeech}</h5>
        {param.meaning.definitions.map(function (definition, index) {
          return (
            <div key={index}>
              <div className="definition">{definition.definition}</div>
              <div className="example">
                <em>{definition.example}</em>
              </div>

              <small>
                <Synonym synonym={definition.synonyms} />
              </small>
            </div>
          );
        })}
      </div>
    );
  } else return null;
}

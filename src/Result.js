import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";
import "./Result.css";
export default function Result(param) {
  if (param.result) {
    return (
      <div className="Result">
        <section>
          <h2>{param.result.word}</h2>

          {param.result.phonetics.map(function (phonetics, index) {
            return (
              <div key={index}>
                <Phonetics phonetics={phonetics} />
              </div>
            );
          })}
        </section>

        {param.result.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <Meaning meaning={meaning} />
            </section>
          );
          //   return meaning.definitions[0].definition;
        })}
      </div>
    );
  } else {
    return null;
  }
}

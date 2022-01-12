import React from "react";
import "./Synonym.css";

export default function Synonym(param) {
  if (param.synonym) {
    return (
      <ul className="Synonym">
        {param.synonym.map(function (synonym, index) {
          return (
            <li key={index}>
           
              {synonym}
              
            </li>
          );
        })}
      </ul>
    );
  } else {
    return null;
  }
}

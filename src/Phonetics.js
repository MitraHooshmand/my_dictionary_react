import React from "react";
import "./Phonetics.css";
export default function Phonetics(param) {
  return (
    <div className="Phonetics">
      <a href={param.phonetics.audio} target="_blank">
        Sound
      </a>
      <span className="text"> {param.phonetics.text}</span>
    </div>
  );
}

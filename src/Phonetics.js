import React from "react";

export default function Phonetics(param){
    return (
      <div className="Phonetics">
        <strong>Phonetics: </strong>
        {param.phonetics.text}
        <br/>
        <a href={param.phonetics.audio} target="_blank">Sound</a>
      </div>
    );
}
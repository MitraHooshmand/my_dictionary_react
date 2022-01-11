import React from "react";
import Meaning from "./Meaning";
export default function Result(param){
  
    if (param.result){
    return (
      <div className="Result">
        <h2>{param.result.word}</h2>
        {param.result.meanings.map(function (meaning, index) {
            return (<div key={index}>
                <Meaning meaning={meaning}/>
            </div>);
        //   return meaning.definitions[0].definition; 
        })}
        
      </div>
    );
    }else{
        return null;
    }

}
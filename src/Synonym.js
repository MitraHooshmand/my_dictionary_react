import React from "react";

export default function Synonym(param) {
    //console.log(param.synonym);

    if(param.synonym){
         return (
           <div className="Synonym">
             {param.synonym.map(function (synonym, index) {
               return <span key={index}> {synonym}{"  ,  "}</span>;
             })}
           </div>
         );

    }else{
        return null;
    }

 
}
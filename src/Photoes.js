import React from "react";

export default function Photoes(param) {
    console.log(`${param.photoes}*******`);
  if (param.photoes) {

    return (
        <section className="Photoes">
            {param.photoes.map(function(photo, index){
                <img src={photo.src.landscape}/>
            })}
        </section>
    );
  } else {
    return null;
  }
}

import React from "react";
import "./Photoes.css";

export default function Photoes(param) {
  //  console.log(param.photoes);
  if (param.photoes) {
    return (
      <section className="Photoes">
        <div className="row">
          {param.photoes.map(function (photo, index) {
  

            return (
              <div className="col-4" key={index}>
                <a href={photo.src.original} target="_blank" rel="noreferrer">
                  <img src={photo.src.tiny} className="img-fluid" />
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
 
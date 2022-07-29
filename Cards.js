import React from "react";


function Card (props){
    console.log (props);
    return(
      <>
        <div className="cards">
        <div className="card">
        <img src={props.imgsrc} alt="poster"  className="card__img" />
        <div className="card__info">
          <span className="card__category"> {props.title}</span>
          <h2 className="card__title"> {props.sname}</h2>
          <a href={props.link} target="_blank">
          <button>Buy Now</button>
          </a>
        </div>
        </div>
        </div>
      </>
  
    );
  }
   
  export default Card;
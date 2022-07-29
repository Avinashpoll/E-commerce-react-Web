import React from "react";
import  ReactDOM  from "react-dom";

import Card from "./Cards";
import "./index.css";
import Adata from "./Adata";

//console.log(Adata[0]sname);
ReactDOM.render(
  <>

  <h2 className="heading_style"> Top 5 E-commerce website :
  <p><ul> Online Shoping 
  <li><a href="https://youtu.be/zV_R6Qnyp0c"> FlipKart</a></li>
  <li><a href="https://www.youtube.com/watch?v=NrmMk1Myrxc">Amazon </a></li>
  <li> <a href="https://youtu.be/_u1vrb4f8bs"> Myntra </a> </li>
  <li><a href="https://youtu.be/LSpHWGh6zKY"> Shopify </a></li>
  <li><a href="https://youtu.be/f8Mij7eipdw">meesho </a></li>
  </ul> </p></h2>

  <Card 
  imgsrc={Adata[0].imgsrc}
  title={Adata[0].title}
  sname={Adata[0].sname}
  link={Adata[0].links}
   />

<Card 
imgsrc={Adata[1].imgsrc}
  title={Adata[1].title}
  sname={Adata[1].sname}
  link={Adata[1].links}
   />

<Card 
imgsrc={Adata[2].imgscr}
  title={Adata[2].title}
  sname={Adata[2].sname}
  link={Adata[2].links}
   />

<Card 
imgsrc={Adata[3].imgscr}
 title={Adata[3].title}
 sname={Adata[3].sname}
  link={Adata[3].links}
   />

<Card 
imgsrc={Adata[4].imgscr}
 title={Adata[4].title}
 sname={Adata[4].sname}
  link={Adata[4].links}
   />
  
  </>,
  document.getElementById("root")
);

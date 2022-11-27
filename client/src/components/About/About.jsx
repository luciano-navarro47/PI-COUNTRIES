import React from "react";
import "./About.css";
import NavBar from "../NavBar/NavBar";
import { useEffect } from "react";

export default function About() {


  return (
    <div className="backgroundDiv">
      <NavBar />
      <span className="span1">
        Hello How are you?! My name is Luciano Navarro, I am 29 years old and
        I live in Buenos Aires. I have been studying Full Stack Developers at
        Henry for five months. Now you are witnessing to see and go through my
        first application!!.Personally, for me, this individual project has
        further increased the love for designing websites.I know very well that
        this is the beginning of many future projects in my life!I hope you
        enjoyed it and thank you very much for reading ♥
      </span>
      <div className="oneIcon">
        <img src="https://static.thenounproject.com/png/3437694-200.png" alt="not found" />
      </div>
      <span className="span2">
        ¡Hola, cómo andas?! Mi nombre es Luciano Navarro, tengo 29 años y
        vivo en Buenos Aires. Estoy estudiando Full Stack Developers en Henry
        desde hace cinco meses. Ahora vos están siendo testigos de ver y
        recorrer mi primera aplicación!!.En lo personal, para mi, este proyecto
        individual ha incrementado aún más el cariño que le voy tomando a todo
        lo que es programar una página Web. Sé muy bien que este es el inicio de
        muchos futuros proyectos en mi vida! Espero que lo hayas disfrutado y
        muchas gracias por leerme ♥
      </span>
      <div className="span3">
        <span>Technologies I used to create this website:</span>
      </div>
      <div className="conteinerIcons">
        <img src="https://cdn-icons-png.flaticon.com/512/5968/5968267.png" alt="img not found" height="100px" width="100px" />
    <img src="https://cdn-icons-png.flaticon.com/512/5968/5968242.png" alt="img not found" height="100px" width="100px" />
    <img src="https://cdn.iconscout.com/icon/free/png-256/javascript-2038874-1720087.png" alt="img not found" height="100px" width="100px" />
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="img not found" height="85px" width="100px" />
    <img src="https://miro.medium.com/max/500/1*tOI6UC5EaS2fPItCesI-AQ.png" alt="img not found" height="100px" width="100px" />
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png" alt="img not found" height="90px" width="130px" />
    <img src="https://cdn.iconscout.com/icon/free/png-256/postgresql-11-1175122.png" alt="img not found" height="100px" width="100px" />
        </div>
        <hr className="moveHr" />
        <div className="conteinerAccounts">
            <h4>¡Follow me on my accounts!</h4>
            <a href="https://www.github.com/Coderman47"><img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="img not found" height="45px" width="50px"/></a>
            <a href="https://www.linkedin.com/in/luciano-navarro-942741244/"><img src="https://cdn-icons-png.flaticon.com/512/145/145807.png" alt="img not found" height="45px" width="50px"/></a>
            {/* <a href=""></a> */}
        </div>
        <hr className="moveHr2"/>
      </div>
  );
} 

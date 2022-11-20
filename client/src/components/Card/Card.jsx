import React from "react";
import { Link } from "react-router-dom";
import "../Card/Card.css"

export default function Card({ id, flags, name, continent, population }) {
  return (
    
     <div className="card">
      <Link to={`/countries/${id}`}>
        <img
          src={flags}
          alt="img de la bandera"
          className="flag"
          />
      </Link>
        <h4>{name}</h4>
      <h5>Continent: {continent}</h5>
    </div>
    
    
  );
}

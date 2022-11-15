import React from "react";
import { Link } from "react-router-dom";

export default function Card({ id, flags, name, continent }) {
  return (
    <div>
      <Link to={`/countries/${id}`}>
        <img
          src={flags}
          alt="img de la bandera"
          width="200px"
          height="150px"
        />
        <h3>{name}</h3>
      </Link>
      <h5>Continent: {continent}</h5>
    </div>
  );
}

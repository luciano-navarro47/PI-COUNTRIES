import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getCountryDetail } from "../actions/index.js";
import { useEffect } from "react";

export default function CountryDetail(props) {
  const dispatch = useDispatch();
  const countryId = props.match.params.id;
  const countryDetail = useSelector((state) => state.countryDetail);
  // console.log("HOLA1", countryDetail)
  // console.log("HOLA2", countryDetail.name)

  useEffect(() => {
    dispatch(getCountryDetail(countryId));
  }, [dispatch]);

  return (
    <div>
      {
        <div>
          <Link to="/home">
            <button>Volver</button>
          </Link>
          <h1>{countryDetail.name}</h1>
          <img
            src={countryDetail.flags}
            alt="imagen de la bandera"
            width="250px"
            height="200px"
          />
          <h3>Continent: {countryDetail.continent}</h3>
          <h4>Código: {countryDetail.id}</h4>
          <h4>Capital: {countryDetail.capital}</h4>
          <h4>
            Subregion:{" "}
            {countryDetail.subregion
              ? countryDetail.subregion
              : "No tiene subregion"}
          </h4>
          <h4>Área: {`${countryDetail.area} km²`}</h4>
          <h4>Población: {countryDetail.population}</h4>
          <h3>
            Actividades:
            <hr />
            {countryDetail.activities?.map((activity) => (
              <div key={activity.name}>
                <h4>Actividad: {activity.name}</h4>
                <p>Dificultad: {`${activity.difficulty}/5`}</p>
                <p>Duracion: {`${activity.duration} minutos`}</p>
                <p>Temporada: {activity.season}</p>
                <hr />
              </div>
            ))}
          </h3>
        </div>
      }
      {/* <p>Cargando...</p> */}
    </div>
  );
}

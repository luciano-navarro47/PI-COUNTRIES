import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getAllCountries} from "../actions";
import { Link } from "react-router-dom";
import Card from "./Card";
import Paginated from "./Paginated";
import SearchBar from "./SearchBar";
import Filter from "./Filter";
//setActualPage = 2

export default function Home() {

  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.countries);
  const [order, setOrder] = useState(""); //estado local vacio
  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage, setCountriesPerPage] = useState(9);
  const lastCountry = currentPage * countriesPerPage;
  const firstCountry = lastCountry - countriesPerPage;
  const currentCountries = allCountries.slice(firstCountry, lastCountry);
  // const numPage = Math.ceil

  const [active, setActive] = useState({
    [currentPage]: true
  })

  // const paginated = (pageNumber) => {
  //   setCurrentPage(pageNumber);
  // };

  function handler(data){
    setActive(data)
  }
  function handleClick(e) {
    e.preventDefault();
    dispatch(getAllCountries());
  }
  useEffect(()=>{
    dispatch(getAllCountries())
  },[dispatch])

  return (
    <div>
      <h1>¡All countries within reach of your screen!</h1>
      <div><SearchBar /></div>
      <button onClick={(e) => handleClick(e)}>Recargar Paises</button>
      <Link to="/activities">Crear actividad</Link>
      <Filter
      
      />
      <Paginated
        countriesPerPage={countriesPerPage}
        allCountries={allCountries.length}
        currentPage={currentPage}
      />
      
      {currentCountries?.map((country) => {
        return (
          <Link to={"/countries/" + country.id}>
            <Card flags={country.flags} name={country.name} continent={country.continent} />
          </Link>
        );
      })}
    </div>
  );
}

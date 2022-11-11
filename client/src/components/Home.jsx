import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllCountries,
  filterCountriesByContinent,
  FilterActivity,
  orderByName,
} from "../actions";
import { Link } from "react-router-dom";
import Card from "./Card";
import Paginated from "./Paginated";
import SearchBar from "./SearchBar";

export default function Home() {
  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.countries);
  const [order, setOrder] = useState(""); //estado local vacio
  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage, setCountriesPerPage] = useState(9);
  const lastCountry = currentPage * countriesPerPage;
  const firstCountry = lastCountry - countriesPerPage;
  const currentCountries = allCountries.slice(firstCountry, lastCountry);

  //   const allActivities = useSelector((state)=> state.activities)
  //   const mapActivities = allActivities.map((e)=> e.name)
  //   const uniqueActivities = mapActivities.filter((item, index)=>{
  //     return mapActivities.indexOf(item) === index;
  //   })

  const paginated = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getAllCountries());
  }, [dispatch]);

  function handleClick(e) {
    e.preventDefault();
    dispatch(getAllCountries());
  }

  function handleFilterContinent(e) {
    dispatch(filterCountriesByContinent(e.target.value));
  }

  //   function handleSelect(e){
  //     e.preventDefault()
  //     dispatch(FilterActivity(e.target.value))
  //   }

  function handleSort(e) {
    e.preventDefault();
    dispatch(orderByName(e.target.value));
    setCurrentPage(1);
    setOrder(`Ordered ${e.target.value}`);
  }

  return (
    <div>
      <Link to="/activities">Crear actividad</Link>
      <h1>Todos los paises al alcance de tu pantalla</h1>
      <button onClick={(e) => handleClick(e)}>Recargar Paises</button>
      <div>
        <select onChange={handleSort}>
          <option value="asc">A-Z</option>
          <option value="desc">Z-A</option>
        </select>
        <select onChange={(e) => handleFilterContinent(e)}>
          <option value="All">Todos</option>
          <option value="Asia">Asia</option>
          <option value="Americas">Americas</option>
          <option value="Africa">Africa</option>
          <option value="Europe">Europa</option>
          <option value="Oceania">Oceania</option>
          <option value="Antarctic">Antartida</option>
        </select>
        <select >
          <option value="no filter">Tipo de actividad turistica</option>
          {/* {uniqueActivities.map((activity)=>(
            <option value={activity} key={activity}>{activity}</option>
          ))} */}
        </select>
        <select>
          <option value="minmax">De min a max poblacion</option>
          <option value="maxmin">De max a min poblacion</option>
        </select>
        <Paginated
          countriesPerPage={countriesPerPage}
          allCountries={allCountries.length}
          paginated={paginated}
        />
        <SearchBar/>
        {currentCountries?.map((el) => {
          return (
            <Link to={"/home" + el.id}>
              <Card flags={el.flags} name={el.name} continent={el.continent} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Paginated from "../Paginated/Paginated";
import SearchBar from "../SearchBar/SearchBar";
import Filter from "../Filter/Filter";
import Cards from "../Cards/Cards";
import { getAllCountries } from "../../redux/actions";
import "./Home.css";
import "../Cards/Cards.css"

export default function Home() {
  const dispatch = useDispatch();

  const currentPage = useSelector((state) => state.actualPage);
  const allCountries = useSelector((state) => state.countries);


  const [countriesPerPage, setCountriesPerPage] = useState(9);

  const [active, setActive] = useState({ [currentPage]: true });

  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;

  const currentCountries =
    currentPage === 1 ? allCountries.slice(0, 9) : currentPage === 28 ? 
    allCountries.slice(indexOfFirstCountry, allCountries.length) 
      : allCountries.slice(indexOfFirstCountry, indexOfLastCountry);



  useEffect(() => {
    dispatch(getAllCountries());
  }, [dispatch]);

  function handler(data){
    setActive(data)
  }

  return (
    <div className="conteinerHome">
      <div className="container2">
        <h1>¡All countries within reach of your screen!</h1>
      </div>
      <div className="containerButton">
     <Link  className="button-55" to="/activities">♥Create Activity♥</Link>
          
      </div>
      <div className="searchClass">
        <SearchBar />
      </div>
      <Filter
      handler={handler}
      />
      <hr />
      <Paginated
        countriesPerPage={countriesPerPage}
        allCountries={allCountries.length}
        active={active}
        setActive={setActive}
      />
      <hr></hr>
      <div className="containerCountry">
        <Cards currentCountries={currentCountries}/>
      </div>
    </div>
  );
}

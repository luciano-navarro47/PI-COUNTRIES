import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Paginated from "./Paginated";
import SearchBar from "./SearchBar";
import Filter from "./Filter";
import Cards from "./Cards";

export default function Home() {

  const currentPage = useSelector((state)=> state.actualPage)
  const allCountries = useSelector((state) => state.countries);

  const [order, setOrder] = useState("");
  const [countriesPerPage, setCountriesPerPage] = useState(9.99);
  const [active, setActive] = useState({ [currentPage]: true })

  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const currentCountries = currentPage===1?allCountries.slice(0,9):currentPage===26?
  allCountries.slice(249, allCountries.length):allCountries.slice(indexOfFirstCountry, indexOfLastCountry);

  const numPage = Math.ceil(allCountries.length/countriesPerPage)

  function handler(data){
    setActive(data)
  }

  return (
    <div>
      <Link to="/activities">♥Create Activity♥</Link>
      <h1>¡All countries within reach of your screen!</h1>
      <div><SearchBar/></div>
      <Filter
        active={active}
        numPage={numPage}
        handler={handler}
        setOrder={setOrder}
      />
      <Paginated
        countriesPerPage={countriesPerPage}
        allCountries={allCountries.length}
        currentPage={currentPage}
        numPage={numPage}
        setActive={setActive}
        active={active}
      />
     <hr></hr>
     <div>
      <Cards
      currentCountries={currentCountries}/>
     </div>
    </div>
  );
}

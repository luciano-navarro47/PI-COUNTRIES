import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Paginated from "../Paginated/Paginated";
import SearchBar from "../SearchBar/SearchBar";
import Filter from "../Filter/Filter"
import Cards from "../Cards/Cards";

export default function Home() {

  const currentPage = useSelector((state)=> state.actualPage)
  const allCountries = useSelector((state) => state.countries);

  const [order, setOrder] = useState("");
  const [countriesPerPage, setCountriesPerPage] = useState(9);
  const [active, setActive] = useState({ [currentPage]: true })

  const indexOfLastCountry = currentPage  * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const currentCountries = allCountries.slice(indexOfFirstCountry, indexOfLastCountry);

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
        numPage={numPage -1}
        handler={handler}
        setOrder={setOrder}
      />
      <Paginated
        countriesPerPage={countriesPerPage}
        allCountries={allCountries.length}
        currentPage={currentPage}
        numPage={numPage -1}
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

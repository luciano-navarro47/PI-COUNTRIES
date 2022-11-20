import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Paginated from "../Paginated/Paginated";
import SearchBar from "../SearchBar/SearchBar";
import Filter from "../Filter/Filter";
import Cards from "../Cards/Cards";
import { getAllCountries } from "../../actions";
import "./Home.css";
import "../Cards/Cards.css"

export default function Home() {
  const dispatch = useDispatch();
  //3
  const currentPage = useSelector((state) => state.actualPage);
  const allCountries = useSelector((state) => state.countries);
  // console.log(allCountries.length);
  //{argentina}, {ecuador}, {peru}, {etc}...

  const [countriesPerPage, setCountriesPerPage] = useState(9);
  const [orden, setOrden] = useState("");
  const [active, setActive] = useState({ [currentPage]: true });
  //3         //9.99
  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  //3   27 al 36
  const currentCountries =
    currentPage === 1 ? allCountries.slice(0, 9) : currentPage === 28 ? 
    allCountries.slice(indexOfFirstCountry, allCountries.length) 
      : allCountries.slice(indexOfFirstCountry, indexOfLastCountry);

  const numPage = Math.ceil(allCountries.length / countriesPerPage);
  // console.log(numPage)

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
      <button className="buttonCreate"><Link to="/activities">♥Create Activity♥</Link>
          </button>
      </div>
      <div >
        <SearchBar />
      </div>
      .
      <Filter
      active={active}
      // numPage={numPage - 1}
      handler={handler}
      setOrden={setOrden}
      />
      <hr />
      <Paginated
        countriesPerPage={countriesPerPage}
        allCountries={allCountries.length}
        currentPage={currentPage}
        
        active={active}
        setActive={setActive}
        
      />
      <hr></hr>
      <div className="containerCountry">
        <Cards currentCountries={currentCountries} />
      
      </div>
      
    </div>
  );
}

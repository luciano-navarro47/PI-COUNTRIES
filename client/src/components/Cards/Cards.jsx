import React from "react";
import Card from "../Card/Card"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllCountries } from "../../redux/actions";
import "./Cards.css"

export default function Cards({ currentCountries }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCountries());
  }, [dispatch]);

  return (
    
    <div className="paises">
      {currentCountries.length? currentCountries.map((country) => {
            return(
              <Card
              key={country.id}
              id={country.id}
              flags={country.flags}
              name={country.name}
              continent={country.continent}
              />)
          })
        : "That country does not exists"}
  
    </div>
  )
}

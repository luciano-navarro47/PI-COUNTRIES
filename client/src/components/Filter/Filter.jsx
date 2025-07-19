import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  getActivities,
  filterActivity,
  filterCountriesByContinent,
  orderByName,
  orderByPopulation,
  setCurrentPage
} from "../../redux/actions";
import "./Filter.css"

export default function Filter({handler}){

  const dispatch = useDispatch();

  const allActivities = useSelector((state) => state.activities);
  const mapActivities = allActivities.map((element) => element.name);
  const uniqueActivities = mapActivities.filter((item, index) => {
    return mapActivities.indexOf(item === index);
  });

 ;

  function handleSelect(e) {
    e.preventDefault();
    dispatch(filterActivity(e.target.value));
    handler({1:true})
    dispatch(setCurrentPage(1))
  }

  function handleFilterContinent(e) {
<<<<<<< HEAD
=======
    e.preventDefault()
>>>>>>> f72f63d (update react-scripts to 5.0.1 | refactor createCountriesToDb)
    dispatch(filterCountriesByContinent(e.target.value));
    dispatch(setCurrentPage(1));
    handler({1:true})
  }

  function handleSort(e) {
    e.preventDefault();
    dispatch(orderByName(e.target.value));
    dispatch(setCurrentPage(1));
    handler({1:true})
  }

  function handleSortPopulation(e) {
    e.preventDefault();
    dispatch(orderByPopulation(e.target.value));
    dispatch(setCurrentPage(1))
    handler({1:true})
  }

  useEffect(() => {
    dispatch(getActivities());
  }, [dispatch])

  return (
    <div>
      <select className="button-33" onChange={(e) => handleSort(e)}>
        <option value="default">General order</option>
        <option value="asc">A-Z</option>
        <option value="desc">Z-A</option>
      </select>
      
      <select className="button-33" onChange={(e) => handleFilterContinent(e)}>
        <option value="All">All continents</option>
        <option value="Asia">Asia</option>
        <option value="Americas">Americas</option>
        <option value="Africa">Africa</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
        <option value="Antarctic">Antartic</option>
      </select>

      <select className="button-33" onChange={(e) => handleSelect(e)}>
        <option value="no filter">Countries Activities</option>
        {uniqueActivities.map((activity) => (
          <option value={activity} key={activity}>
            {activity}
          </option>
        )) 
        }
        
      </select>

      <select className="button-33" onChange={(e) => handleSortPopulation(e)}>
        <option value="minmax">Population: - to +</option>
        <option value="maxmin">Population: + to -</option>
      </select>
    </div>
  );
}

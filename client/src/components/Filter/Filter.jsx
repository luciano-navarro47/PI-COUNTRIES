import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  getActivities,
  filterActivity,
  filterCountriesByContinent,
  orderByName,
  orderByPopulation,
} from "../../actions";
import { setCurrentPage } from "../../actions";

export default function Filter({ setOrder, handler }) {

  const dispatch = useDispatch();

  const allActivities = useSelector((state) => state.activities);
  const mapActivities = allActivities.map((element) => element.name);
  const uniqueActivities = mapActivities.filter((item, index) => {
    return mapActivities.indexOf(item === index);
  });

  useEffect(() => {
    dispatch(getActivities());
  }, [dispatch]);

  function handleSelect(e) {
    e.preventDefault();
    dispatch(filterActivity(e.target.value));
    setOrder(e.target.value);
    handler({1:true})
  }

  function handleFilterContinent(e) {
    dispatch(filterCountriesByContinent(e.target.value));
    dispatch(setCurrentPage(1));
    setOrder(e.target.value);
    handler({1:true})
   
  }

  function handleSort(e) {
    e.preventDefault();
    dispatch(orderByName(e.target.value));
    dispatch(setCurrentPage(1));
    handler({1:true})
    setOrder(`Order ${e.target.value}`);
  }

  function handleSortPopulation(e) {
    e.preventDefault();
    dispatch(orderByPopulation(e.target.value));
    dispatch(setCurrentPage(1))
    handler({1:true})
    setOrder(`Order ${e.target.value}`);
  }

  return (
    <div>
      <select onChange={(e) => handleSort(e)}>
        <option value="default">Order</option>
        <option value="asc">A-Z</option>
        <option value="desc">Z-A</option>
      </select>
      
      <select onChange={(e) => handleFilterContinent(e)}>
        <option value="All">All continents</option>
        <option value="Asia">Asia</option>
        <option value="Americas">Americas</option>
        <option value="Africa">Africa</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
        <option value="Antarctic">Antartic</option>
      </select>

      <select onChange={(e) => handleSelect(e)}>
        <option value="no filter">Countries Activities</option>
        {uniqueActivities.map((activity) => (
          <option value={activity} key={activity}>
            {activity}
          </option>
        ))}
      </select>

      <select onChange={(e) => handleSortPopulation(e)}>
        <option value="minmax">Population: - to +</option>
        <option value="maxmin">Population: + to -</option>
      </select>
    </div>
  );
}

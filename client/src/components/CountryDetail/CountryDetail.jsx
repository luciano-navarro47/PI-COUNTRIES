import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getCountryDetail } from "../../actions/index.js";
import { useEffect } from "react";
import "./CountryDetail.css"

export default function CountryDetail(props) {
  const dispatch = useDispatch();
  const countryId = props.match.params.id;
  const countryDetail = useSelector((state) => state.countryDetail);

  useEffect(() => {
    dispatch(getCountryDetail(countryId));
  }, [dispatch]);

  return (
    <div>
      {
        <div className="counDetail">
          <Link to="/home">
            <button>Back</button>
          </Link>
          <h1>{countryDetail.name}</h1>
          <img
            src={countryDetail.flags}
            alt="Image of the flag"
            width="250px"
            height="200px"
          />
          <h3>Continent: {countryDetail.continent}</h3>
          <h4>Code: {countryDetail.id}</h4>
          <h4>Capital: {countryDetail.capital}</h4>
          <h4>
            Subregion:{" "}
            {countryDetail.subregion
              ? countryDetail.subregion
              : "No subregion"}
          </h4>
          <h4>Área: {`${countryDetail.area} km²`}</h4>
          <h4>Population: {countryDetail.population}</h4>
          <h3>
            Activities:
            <hr />
            {countryDetail.activities?.map((activity) => (
              <div key={activity.name}>
                <h4>Activity: {activity.name}</h4>
                <p>Difficulty: {`${activity.difficulty} of 5`}</p>
                <p>Duration: {`${activity.duration} minutes`}</p>
                <p>Season: {activity.season}</p>
                <hr />
              </div>
            ))}
          </h3>
        </div>
      }
      
    </div>
  );
}

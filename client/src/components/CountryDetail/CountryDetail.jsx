import React from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getCountryDetail, deleteActivity, updateActivity } from "../../redux/actions/index.js";
import { useEffect } from "react";
import "./CountryDetail.css"

export default function CountryDetail(props) {

  const { id } = useParams(); 
  
  const history = useHistory(); 

  const dispatch = useDispatch();
  const countryDetail = useSelector((state) => state.countryDetail);
  const countryId = props.match.params.id;
  
  
  function handleDelete(id){
    dispatch(deleteActivity(id))
    alert("Activity successfully deleted")
    history.push("/home")
  }

  // function handleUpdate(){
  //   dispatch(updateActivity())
  //   alert("Activity successfully updated")
  //   history.push("/home")
  // }

  useEffect(() => {
    dispatch(getCountryDetail(countryId));
  }, [dispatch]);


return (

  
  <div className="maincointainer">
      <div className="goBack">
        <Link to="/home" className="btn-detail">Go Back</Link> 
      </div>
      <div className="subContainer1">
      <h1 className="h1">{countryDetail.name}</h1>
      <img src={countryDetail.flags} alt="Aca va una imagen" className="bandera" />
      <h2 className="h2">Continent: {countryDetail.continent}</h2>
      <h3 className="h3">CODE: {countryDetail.id}</h3>
      </div>
      <div className="subContainer2">
        <div >
        <h4>Capital: {countryDetail.capital}</h4>
      <h4>Subregion: {countryDetail.subregion ? countryDetail.subregion : "None"}</h4>
      <h4>Area: {`${countryDetail.area} km²`}</h4>
      <h4>Population: {countryDetail.population}</h4>
      </div>
      <div className="subContainer3">
      <h3>ACTIVITIES:
          <hr />
          {countryDetail.activities?.map(activity =>
              <div key={activity.name}>
                  <h4>Activity name: {activity.name}</h4>
                  <p>Difficulty: {`${activity.difficulty}/5`}</p>
                  <p>Duration: {`${activity.duration} minutes`}</p>
                  <p>Season: {activity.season}</p>
                  <button className="button-24" onClick={(e)=>handleDelete(e)}>x</button>
                  <hr />
              </div>
          )}
      </h3>
        </div>
      </div>
      
     
      </div>
)
};

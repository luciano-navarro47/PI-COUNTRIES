import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getCountryDetail } from "../../redux/actions/index.js";
import { useEffect } from "react";
import "./CountryDetail.css"

export default function CountryDetail(props) {
  const dispatch = useDispatch();
  const countryDetail = useSelector((state) => state.countryDetail);
  const countryId = props.match.params.id;

  useEffect(() => {
    dispatch(getCountryDetail(countryId));
  }, [dispatch]);

//   return (
//     <div className="contenedorDetail">
//       {
//         <div className="countryDetail">
//           <Link to="/home" className="contLink">
//             <button className="btn">Back</button>
//           </Link>
//           <h1>{countryDetail.name}</h1>
//           <img
//             src={countryDetail.flags}
//             alt="Image of the flag"
//             width="250px"
//             height="200px"
//             className="flags2"
//           />
//           <h3>Continent: {countryDetail.continent}</h3>
//           <h4>Code: {countryDetail.id}</h4>
//           <h4>Capital: {countryDetail.capital}</h4>
//           <h4>
//             Subregion:{" "}
//             {countryDetail.subregion
//               ? countryDetail.subregion
//               : "No subregion"}
//           </h4>
//           <h4>Área: {`${countryDetail.area} km²`}</h4>
//           <h4>Population: {countryDetail.population}</h4>
//             <div className="activities">
//             <h3 >
//               <div className="">
//             Activities:
//               </div>
//             {countryDetail.activities?.map((activity) => (
//               <div key={activity.name}>
//                 <h4>Activity: {activity.name}</h4>
//                 <p>Difficulty: {`${activity.difficulty} of 5`}</p>
//                 <p>Duration: {`${activity.duration} minutes`}</p>
//                 <p>Season: {activity.season}</p>
              
//               </div>
//             ))}
//           </h3>
//             </div>
          
//           </div>
//       }
      
//     </div>
//   );
// }

return (
  <div className="maincointainer">
      <div className="GoBack">
        <Link to="/home" className="btn-detail">Go Back</Link> 
      </div>
      <div className="subContainer1">
      <h1 className="h1">{countryDetail.name}</h1>
      <img src={countryDetail.flags} alt="Aca va una imagen" className="bandera" />
      <h2 className="h2">{countryDetail.continent}</h2>
      <h3 className="h3">{countryDetail.id}</h3>
      </div>
      <div className="subContainer2">
        <div>
        <h4>Capital: {countryDetail.capital}</h4>
      <h4>Subregion: {countryDetail.subregion ? countryDetail.subregion : "None"}</h4>
      <h4>Area: {`${countryDetail.area} km²`}</h4>
      <h4>Population: {countryDetail.population}</h4>
      </div>
      <div className="subContainer3">
      <h3>Activities:
          <hr />
          {countryDetail.activities?.map(activity =>
              <div key={activity.name}>
                  <h4>Activity name: {activity.name}</h4>
                  <p>Difficulty: {`${activity.difficulty}/5`}</p>
                  <p>Duration: {`${activity.duration} minutes`}</p>
                  <p>Season: {activity.season}</p>
                  <hr />
              </div>
          )}
      </h3>
      
        </div>
      </div>
      </div>
)
};

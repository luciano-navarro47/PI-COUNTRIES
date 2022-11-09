import axios from "axios";

export const GET_ALL_COUNTRIES = "GET_ALL_COUNTRIES";
export const FILTER_BY_CONTINENT = "FILTER_BY_CONTINENT";
export const FILTER_ACTIVITY = "FILTER_ACTIVITY";
export const ORDER_BY_NAME = "ORDER_BY_NAME";
// export const  =

export function getAllCountries() {
  return async function (dispatch) {
    const allCountries = await axios.get("http://localhost:3001/countries", {});
    return dispatch({ type: GET_ALL_COUNTRIES, payload: allCountries.data });
  };
}

export function filterCountriesByContinent(payload) {
  return {
    type: FILTER_BY_CONTINENT,
    payload,
  };
}

// export function FilterActivity(payload) {
//   return {
//     type: FILTER_ACTIVITY,
//     payload,
//   };
// }

export function orderByName(payload) {
  return {
    type: ORDER_BY_NAME,
    payload,
  };
}

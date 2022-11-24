import axios from "axios";

export const GET_ALL_COUNTRIES = "GET_ALL_COUNTRIES";
export const GET_COUNTRY_NAME = "GET_COUNTRY_NAME";
export const GET_ACTIVITIES = "GET_ACTIVITIES";
export const GET_DETAIL = "GET_DETAIL";
export const CREATE_ACTIVITY = "CREATE_ACTIVITY";
export const FILTER_BY_CONTINENT = "FILTER_BY_CONTINENT";
export const FILTER_ACTIVITY = "FILTER_ACTIVITY";
export const ORDER_BY_NAME = "ORDER_BY_NAME";
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
export const ORDER_BY_POPULATION = "ORDER_BY_POPULATION";
export const DELETE_ACTIVITY = "DELETE_ACTIVITY";
export const UPDATE_ACTIVITY = "UPDATE_ACTIVITY"

export function getAllCountries() {
  return async function (dispatch) {
    const allCountries = await axios.get("http://localhost:3001/countries");
    return dispatch({ type: GET_ALL_COUNTRIES, payload: allCountries.data });
  };
}

export function getCountryDetail(id) {
  return async function (dispatch) {
    const json = await axios.get(`http://localhost:3001/countries/${id}`, {});

    return dispatch({
      type: GET_DETAIL,
      payload: json.data,
    });
  };
}

export function getNameCountry(input) {
  return async function (dispatch) {
    try {
      let response = await axios.get(
        "http://localhost:3001/countries?name=" + input
      );
      return dispatch({
        type: GET_COUNTRY_NAME,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getActivities() {
  return async function (dispatch) {
    
    const info = await axios.get("http://localhost:3001/activities");

    return dispatch({
      type: GET_ACTIVITIES,
      payload: info.data,
    });
  };
}

export function createActivity(payload) {
  return async function (dispatch) {
    try {
      const json = await axios.post(
        "http://localhost:3001/activities",
        payload
      );
      console.log(json)
      return dispatch({ type: CREATE_ACTIVITY, payload: payload });
    } catch (error) {
      console.log(error);
    }
  };
}

export function filterCountriesByContinent(payload) {
  return {
    type: FILTER_BY_CONTINENT,
    payload,
  };
}

export function filterActivity(payload) {
  return {
    type: FILTER_ACTIVITY,
    payload,
  };
}

export function orderByName(payload) {
  return {
    type: ORDER_BY_NAME,
    payload,
  };
}

export function orderByPopulation(payload) {
  return {
    type: ORDER_BY_POPULATION,
    payload,
  };
}

export function setCurrentPage(payload) {
return {
  type: SET_CURRENT_PAGE,
    payload,
  };
}

export function deleteActivity(id){
  return async function(dispatch){
      try {
        const json = await axios.delete(`http://localhost:3001/activities/${id}`)
        return dispatch({
            type: DELETE_ACTIVITY,
            payload: json.data
        })
      } catch (error) {
        alert("Activity not delete")
      }
  }
}

export function updateActivity(payload, id){
    return async function(dispatch){
      try {
        await axios.put(`/activities/${id}`, payload)
        console.log("soy el payload", payload)
        return dispatch({type: UPDATE_ACTIVITY}, payload)
      } catch (error) {
        alert("Activity not update")
      }
    }
}




import axios from "axios"

export const GET_ALL_COUNTRIES = 'GET_ALL_COUNTRIES'
export const GET_ALL_ACTIVITIES = "GET_ALL_ACTIVITIES"
// export const  =
// export const  =
// export const  =


export function getCountries(){
    return async function(dispatch){
        const json = await axios.get("http://localhost:3001/countries")
        return dispatch({type: GET_ALL_COUNTRIES, payload: json.data})
    }
}

// export function
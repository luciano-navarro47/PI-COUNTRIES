import {
  GET_ALL_COUNTRIES,
  GET_COUNTRY_NAME,
  GET_ACTIVITIES,
  FILTER_BY_CONTINENT,
  FILTER_ACTIVITY,
  ORDER_BY_NAME,
  CREATE_ACTIVITY,
  GET_DETAIL
} from "../actions/index.js";

const initialState = {
  countries: [],
  allCountries: [],
  activities: [],
  countryDetail: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
        allCountries: action.payload,
      };
    case GET_COUNTRY_NAME:
      return {
        ...state,
        countries: action.payload,
      };
    case GET_ACTIVITIES:
      return {
        ...state,
        activities: action.payload,
      };
    case GET_DETAIL:
      return {
        ...state,
        countryDetail: action.payload
      };
    case CREATE_ACTIVITY:
      return {
        ...state,
        createActivity: [...state.activities, action.payload],
      };
    case FILTER_BY_CONTINENT:
      const allCountries = state.allCountries;
      const continentFiltered =
        action.payload === "All"
          ? allCountries
          : allCountries.filter((el) => el.continent === action.payload);
      console.log(continentFiltered);
      return {
        ...state,
        countries: continentFiltered,
      };

    case ORDER_BY_NAME:
      const sortedArr =
        action.payload === "asc"
          ? state.countries.sort(function (a, b) {
              if (a.name > b.name) {
                return 1;
              }
              if (b.name > a.name) {
                return -1;
              }
              return 0;
            })
          : state.countries.sort(function (a, b) {
              if (a.name > b.name) {
                return -1;
              }
              if (b.name > a.name) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        countries: sortedArr,
      };
//  case FILTER_ACTIVITY:
    //     let filter = action.payload === "no filter"? state.       allCountries : state.allCountries.filter(country=> {
    //         const activities = country.activities.map(
    //             (activity) => activity.name
    //         )
    //         console.log(activities)
    //         return activities.includes(action.payload)
    //     })
    //         return{
    //             ...state,
    //             countries: filter
    //         }
    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;

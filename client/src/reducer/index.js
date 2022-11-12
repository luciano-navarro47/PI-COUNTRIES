import {
  GET_ALL_COUNTRIES,
  GET_COUNTRY_NAME,
  GET_ACTIVITIES,
  FILTER_BY_CONTINENT,
  FILTER_ACTIVITY,
  ORDER_BY_NAME,
  CREATE_ACTIVITY,
  GET_DETAIL,
  SET_CURRENT_PAGE,
  ORDER_BY_POPULATION,
} from "../actions/index.js";

const initialState = {
  countries: [],
  allCountries: [],
  activities: [],
  countryDetail: [],
  currentPage: 1,
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
        countryDetail: action.payload,
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
    case FILTER_ACTIVITY:
      let filter =
        action.payload === "no filter"
          ? state.allCountries
          : state.allCountries.filter((country) => {
              const activities = country.activities.map(
                (activity) => activity.name
              );

              return activities.includes(action.payload);
            });
      return {
        ...state,
        countries: filter,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    case ORDER_BY_POPULATION:
      const sortedArr2 =
        action.payload === "minmax"
          ? state.countries.sort(function (a, b) {
              if (a.population > b.population) {
                return -1;
              }
              if (b.population > a.population) {
                return 1;
              }
              return 0;
            })
          : state.countries.sort(function (a, b) {
              if (a.population > b.population) {
                return 1;
              }
              if (b.population > a.population) {
                return -1;
              }
              return 0;
            });
            return{
              ...state,
              countries: sortedArr2
            }

    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;

const axios = require("axios");
const { Country, Activities } = require("../../db.js");

const createCountriesToDb = async () => {
<<<<<<< HEAD
  const apiInfo = await axios.get("https://restcountries.com/v3/all");
  // console.log(apiInfo.data)
  const data = await apiInfo.data.map((el) => {
    return {
      id: el.cca3,
      name: el.name.common,
      continent: el.region,
      capital: el.capital ? el.capital[0] : "x",
      subregion: el.subregion ? el.subregion : "x",
      area: el.area,
      population: el.population,
      flags: el.flags[1],
    };
  });

  data.forEach((country) => {
    Country.findOrCreate({
      where: {
        id: country.id,
        name: country.name,
        continent: country.continent,
        capital: country.capital,
        subregion: country.subregion,
        area: country.area,
        population: country.population,
        flags: country.flags,
      },
      default:{

      }
    });
=======

  const count = await Country.count();
  if (count > 0) {
    return;
  }

  const url = "https://restcountries.com/v3.1/all";
  const params = {
    fields: "cca3,name,region,capital,subregion,area,population,flags",
  };

  const response = await axios.get(url, { params });
  const countryList = response.data.map((el) => ({
    id: el.cca3,
    name: el.name.common,
    continent: el.region,
    capital:
      Array.isArray(el.capital) && el.capital.length > 0
        ? el.capital[0]
        : "Doesn't have capital",
    subregion: el.subregion ? el.subregion : "Doesn't have subregion",
    area: el.area,
    population: el.population,
    flags: el.flags?.png || null,
  }));

  await Country.bulkCreate(countryList, {
    ignoreDuplicates: true
>>>>>>> f72f63d (update react-scripts to 5.0.1 | refactor createCountriesToDb)
  });
};

const getAllCountriesDb = async () => {
  const allCountries = await Country.findAll({
<<<<<<< HEAD
   
=======
>>>>>>> f72f63d (update react-scripts to 5.0.1 | refactor createCountriesToDb)
    include: [
      {
        model: Activities,
        attributes: ["name", "difficulty", "duration", "season"],
      },
    ],
  });
<<<<<<< HEAD
  // console.log("hellouuuuu",allCountries)
=======
>>>>>>> f72f63d (update react-scripts to 5.0.1 | refactor createCountriesToDb)
  return allCountries;
};

const getAllActivities = async () => {
  const data = await Activities.findAll({
    include: [
      {
        model: Country,
        attributes: ["name"],
        through: {
          attributes: {
            exclude: ["createdAt", "updateAt"],
          },
        },
      },
    ],
  });
<<<<<<< HEAD
  // console.log("getAllActivities", data)
=======
>>>>>>> f72f63d (update react-scripts to 5.0.1 | refactor createCountriesToDb)
  return data;
};

const findCountryById = (id, countries) => {
  const filterCountry = countries.find(
<<<<<<< HEAD
    (country) => country.id.toLowerCase() === id.toLowerCase());
  // console.log("soy el find()" , filterCountry)
=======
    (country) => country.id.toLowerCase() === id.toLowerCase()
  );
>>>>>>> f72f63d (update react-scripts to 5.0.1 | refactor createCountriesToDb)
  if (!filterCountry) {
    throw new Error("A country with that ID was not found");
  }
  return filterCountry;
};

const createActivity = async (name, difficulty, duration, season, paises) => {
  let newActivity = await Activities.create({
    name,
    difficulty,
    duration,
    season,
  });
  const countries = await Country.findAll({
    where: {
      name: paises,
    },
  });
<<<<<<< HEAD
  console.log(countries)
=======
  console.log(countries);
>>>>>>> f72f63d (update react-scripts to 5.0.1 | refactor createCountriesToDb)
  newActivity.addCountry(countries);
};

module.exports = {
  getAllCountriesDb,
  getAllActivities,
  findCountryById,
  createCountriesToDb,
  createActivity,
};

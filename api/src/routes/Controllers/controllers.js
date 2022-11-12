const axios = require("axios");
const { Country, Activities } = require("../../db.js");

const countriesToDb = async () => {
  const apiInfo = await axios.get("https://restcountries.com/v3/all");
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
    });
  });
};

const findCountriesById = (id, countries) => {
  const filterCountry = countries.find(
    (country) => country.id.toLowerCase() === id.toLowerCase()
  );
  if (!filterCountry) {
    throw new Error("No se encontró un pais con ese ID");
  }
  return filterCountry;
};

const findCountry = async () => {
  const allCountries = await Country.findAll({
    include: [
      {
        model: Activities,
        attributes: ["name", "difficulty", "duration", "season"],
      },
    ],
  });
  return allCountries;
};

const createActivity = async (name, difficulty, duration, season, paises) => {
  let newActivity = await Activities.create({
    name,
    difficulty,
    duration,
    season,
  });
  const allPaises = await Country.findAll({
    where: {
      name: paises,
    },
  });
  newActivity.addCountry(allPaises);
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
  return data;
};

module.exports = {
  countriesToDb,
  findCountriesById,
  findCountry,
  createActivity,
  getAllActivities,
};

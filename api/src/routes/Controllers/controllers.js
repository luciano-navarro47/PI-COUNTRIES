const axios = require("axios");
const { Country, Activities } = require("../../db.js");

const createCountriesToDb = async () => {

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
  });
};

const getAllCountriesDb = async () => {
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

const findCountryById = (id, countries) => {
  const filterCountry = countries.find(
    (country) => country.id.toLowerCase() === id.toLowerCase()
  );
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
  console.log(countries);
  newActivity.addCountry(countries);
};

module.exports = {
  getAllCountriesDb,
  getAllActivities,
  findCountryById,
  createCountriesToDb,
  createActivity,
};

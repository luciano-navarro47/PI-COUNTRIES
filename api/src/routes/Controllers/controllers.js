const axios = require("axios");
const { Country, Activities } = require("../../db.js");

const createCountriesToDb = async () => {
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

  // console.log("soy la data de la linea 6", data)

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
  // console.log("soy el forEach() de la linea 19", data)
};

const findCountryById = (id, countries) => {
  const filterCountry = countries.find(
    (country) => country.id.toLowerCase() === id.toLowerCase()
  );
  // console.log("soy el find() de la linea 39 en controllers" , filterCountry)
  if (!filterCountry) {
    throw new Error("No se encontró un pais con ese ID");
  }
  return filterCountry;
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

const createActivity = async (name, difficulty, duration, season, paises) => {
  let newActivity = await Activities.create({
    name,
    difficulty,
    duration,
    season,
  });
  const allCountries = await Country.findAll({
    where: {
      name: paises,
    },
  });
  newActivity.addCountry(allCountries);
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

const updateActivity = async(id, name, difficulty) =>{
    const activityDb = await Activities.findByPk(id);
    activityDb.update({
      name: name,
      difficulty: difficulty
    })

    return activityDb;
}

const deleteActivity = async(id)=>{

    const activityDb = await Activities.findByPk(id);
    await activityDb.destroy()
    // const destroyActivity = activityDb.destroy();
    // return destroyActivity;

}

module.exports = {
  getAllCountriesDb,
  getAllActivities,
  findCountryById,
  createCountriesToDb,
  createActivity,
  deleteActivity,
  updateActivity
};

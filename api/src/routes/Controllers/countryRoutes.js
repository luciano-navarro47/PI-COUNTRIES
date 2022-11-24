const { Router } = require("express");
const {
  getAllCountriesDb,
  findCountryById,
} = require("./controllers.js");

const router = Router();

router.get("/", async (req, res) => {
  const { name } = req.query;
  const allCountries = await getAllCountriesDb();
  try {
    if (name) {
      const filterCountry = await allCountries.filter((country) =>
      country.name.toLowerCase().includes(name.toLowerCase())
      );
      filterCountry ? res.status(200).send(filterCountry) : res.status(400).send("That country does not exist");
    } else {
      res.status(200).send(allCountries);
    }
  } catch (error) {
    throw new Error(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const allCountries = await getAllCountriesDb();
    // console.log("findCountry()", allCountries)
    const filterCountries = await findCountryById(id, allCountries);
    filterCountries ? res.status(200).send(filterCountries) : res.status(400).send("Country not found by ID");
  } catch (error) {
    throw new Error(error);
  }
});

// router.get("/dbCountries", async (req, res) => {
//   const countries = await Country.findAll();
//   if (countries) {
//     res.status(201).send(countries);
//   }
//   res.status(400).send("Countries does not exists");
// });

// router.get("/filterByContinent", async (req, res) => {
//   const { continent } = req.query;
//   const allCountries = await Country.findAll({
//     where: {
//       continent: continent,
//     },
//   });
//   if (!allCountries) {
//     res.status(400).send("Not continent");
//   }
//   res.status(201).send(allCountries);
// });

module.exports = router;

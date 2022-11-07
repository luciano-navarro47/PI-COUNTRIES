const { Router } = require("express");
const { createActivity, getAllActivities } = require("./controllers.js");
const { Country, Activities } = require("../../db.js");

const router = Router();

router.post("/", async (req, res) => {
  try {
    const { name, difficulty, duration, season, countries } = req.body;
    const newActivity = await createActivity(
      name,
      difficulty,
      duration,
      season,
      countries
    );
    res.status(200).send("Activity created successfully");
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/", async(req, res)=>{
    try {
        const activities = await getAllActivities()
        res.status(200).send(activities)
    } catch (error) {
        res.status(400).send(error)
    }
})



module.exports = router;

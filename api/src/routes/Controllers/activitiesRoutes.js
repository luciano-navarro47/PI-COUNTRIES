const { Router } = require("express");
const { createActivity, getAllActivities, deleteActivity, updateActivity } = require("./controllers.js");

const router = Router();

router.post("/", async (req, res) => {
  const { name, difficulty, duration, season, countries } = req.body;
  try {
    const newActivity = await createActivity(
      name,
      difficulty,
      duration,
      season,
      countries
    );
    if(!name || !difficulty || !duration || !season || !countries){
      res.status(400).send("Missing fields")
      window.location.reload()
    }else{
      res.status(200).send("Activity created successfully");
    }
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

router.put("/:id", async(req, res)=>{
  try {
    const {id} = req.params;
    const { name, difficulty } = req.body;
    if(!name || !difficulty){
      res.status(400).send("Missing data to update activity")
    }else {
      const activityUpdated = await updateActivity(id, name, difficulty)
      res.status(200).send("Activity successfully updated!")
    }
  } catch (error) {
    res.status(400).send(error)
  }
})

router.delete("/:id", async(req, res)=>{
    try {
      const {id}= req.params
      const deleted = await deleteActivity(id)
      res.status(200).send("Activity successfully deleted!")
    } catch (error) {
      res.status(400).send(error)
    }
})

module.exports = router;

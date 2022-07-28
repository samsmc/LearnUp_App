const router = require("express").Router();
const Activity = require("../models/Activity");

// get all activities from DB
router.get("/", async (req, res) => {
  try {
    const activities = await Activity.find();
    res.status(200).json(activities);
  } catch (err) {
    res.status(500).json(err);
  }
});

// create activity
router.post("/", async (req, res) => {
  const newActivity = new Activity(req.body);
  try {
    const savedActivity = await newActivity.save();
    res.status(200).json(savedActivity);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

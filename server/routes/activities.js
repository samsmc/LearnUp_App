const router = require("express").Router();
const Activity = require("../models/Activity");

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

// get all activities
router.get("/", async (req, res) => {
  try {
    const activities = await Activity.find();
    res.status(200).json(activities);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

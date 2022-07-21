const mongoose = require("mongoose");

const activitySchema = new mongoose.Schema(
  {
    activity: { type: String, require: true },
    accessibility: { type: Number, require: true },
    type: { type: String, require },
    participants: { type: Number, require, min: 2 },
    price: { type: Number },
    imageUrl: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Activity", activitySchema);

const mongoose = require("mongoose");

const activitySchema = new mongoose.Schema(
  {
    activity: { type: String, require: true },
    accessibility: { type: Number, require: true },
    participants: { type: Number, require: true },
    price: { type: Number, require: true },
    type: { type: String, require: true },
    imageUrl: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Activity", activitySchema);

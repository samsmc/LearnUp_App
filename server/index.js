const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const userRoute = require("./routes/users");
const activityRoute = require("./routes/activities");

dotenv.config();

app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("MongoDB Connected!");
  })
  .catch((err) => console.log(err));

app.use("/api/users", userRoute);
app.use("/api/activities", activityRoute);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Backend is running on Port ${port}`);
});

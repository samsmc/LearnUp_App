const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const userRoute = require("./routes/users");
const activityRoute = require("./routes/activities");
const bodyParser = require('body-parser');
const cors = require('cors');

dotenv.config();

app.use(cors({origin: process.env.PUBLIC_DOMAIN}));
app.use(bodyParser.json());

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("MongoDB Connected Successfully!");
  })
  .catch((err) => console.log(err));

app.use("/api/users", userRoute);
app.use("/api/activities", activityRoute);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Backend is running on Port ${port}`);
});

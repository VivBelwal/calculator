const express = require("express");
require("dotenv").config();
const cors = require("cors");

const PORT = process.env.PORT || 8080;

const app = express();

const SignupRoute = require("./src/routes/signup.route");
const LoginRoute = require("./src/routes/login.route");
const ProfileRoute = require("./src/routes/profile.route");
const BmiRoute = require("./src/routes/bmi.route");
const hisRoute = require("./src/routes/history.route");

app.use(express.json());
app.use(cors());

const connect = require("./src/config/db");

app.use("/signup", SignupRoute);
app.use("/login", LoginRoute);
app.use("/profile", ProfileRoute);
app.use("/bmi", BmiRoute);
app.use("/history", hisRoute);

app.listen(PORT, async () => {
  try {
    await connect();
    console.log(`listening on port ${PORT}...`);
  } catch (e) {
    console.log(e);
  }
});

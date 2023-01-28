const express = require("express");

const hisRoute = express.Router();
const User = require("../models/user.model.js");

hisRoute.use(express.json());

hisRoute.get("/", async (req, res) => {
  let { email } = req.body;

  try {
    const user = await User.findOne({ email: email });

    if (!user) {
      return res
        .status(401)
        .json({ status: "failed", message: "Not authorized" });
    }

    return res.status(201).send({ status: "ok", message: user.history });
  } catch (e) {
    console.log(e);
  }
});

module.exports = hisRoute;

const express = require("express");
const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const app = express.Router();

app.get("/", (req, res) => {
  res.status(200).send({message: "Signup User"});
});

app.post("/", async (req, res) => {
  const {name, email, password, pic} = req.body;

  try {
    if (!name || !email || !password) {
      return res.status(400).send({message: "Missing Details"});
    }

    const isExist = await User.findOne({email});
    if (isExist) {
      return res.status(400).send({message: "User already exist"});
    }

    bcrypt.hash(password, 5, async function (err, hash) {
      if (err) {
        return res
          .status(400)
          .send(JSON.stringify({message: "Something went wrong"}));
      } else {
        const mongoQuery = pic
          ? {name, email, password: hash, pic}
          : {name, email, password: hash};
          
        const user = new User(mongoQuery);
        await user.save();
        return res.status(201).send({email});
      }
    });
  } catch (e) {
    res.status(400).send({message: e.message});
  }
});
module.exports = app;

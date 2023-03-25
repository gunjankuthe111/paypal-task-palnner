const express = require("express");
const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const app = express.Router();
const JWTSECTET = process.env.JWTSECTET;

app.get("/", (req, res) => {
  res.status(200).send({message: "Login User"});
});

app.post("/", async (req, res) => {
  const {email, password} = req.body;

  try {
    if (!email || !password) {
      return res.status(400).send({message: "Missing Details"});
    }

    const isExist = await User.findOne({email});
    if (!isExist) {
      return res.status(404).send({message: "Email does not exist"});
    }

    bcrypt.compare(password, isExist.password, function (err, result) {
      if (result) {
        const token = jwt.sign(
          {id:isExist._id,email, name: isExist.name},
          JWTSECTET,
          {expiresIn: "7 days"}
        );
        return res.status(200).send({token,name:isExist.name,email,pic:isExist.pic});
      }

      return res.status(400).send({message: "Wrong credentials"});
    });
  } catch (e) {
    res.status(400).send({message: e.message});
  }
});

module.exports = app;

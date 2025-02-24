const express = require("express");
const User = require("../models/userModel.js");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const router = express.Router();

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "user not found" });
    }
    // compare passowrd
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: "invalid credentials" });
    }
    // generate token
    // console.log(process.env);
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN }
    );

    // success
    res
      .status(200)
      .json({
        message: "login successfull",
        token,
        user: { id: user._id, username: user.username, role: user.role },
      });
  } catch (error) {
    res.status(400).json({ message: "Server Login Error", error });
  }
});

module.exports = router;

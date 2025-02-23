const express = require("express");
const User = require("../models/userModel.js");

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

    // success
    res.status(200).json({ message: "login successfull", user });
  } catch (error) {
    res.status(400).json({ message: "Server Login Error", error });
  }
});

module.exports = router;

const express = require("express");
const User = require("../models/userModel.js");

const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const { username, email, password, role } = req.body;

    const user = new User({ username, email, password, role });
    await user.save();

    res.status(201).json({ message: "User created successfully", user });
  } catch (error) {
    res.status(400).json({ message: "Error creating user", error });
  }
});

module.exports = router;

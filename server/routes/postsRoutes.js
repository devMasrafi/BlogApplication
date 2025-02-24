const express = require("express");
const authMiddleware = require("../middleware/auth.js");
const Post = require("../models/post.js");

const router = express.Router();

// Create a new post
router.post("/", authMiddleware, async (req, res) => {
  try {
    const { title, content, tags, isPublished } = req.body;

    // Basic validation
    if (!title || !content) {
      return res
        .status(400)
        .json({ message: "Title and content are required" });
    }

    // Create the post
    const post = new Post({
      title,
      content,
      tags,
      isPublished,
      author: req.user.id, // Grab user ID from token
    });

    await post.save();

    res.status(201).json({ message: "Post created successfully", post });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

module.exports = router;

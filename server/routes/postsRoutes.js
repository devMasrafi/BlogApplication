const express = require("express");
const authMiddleware = require("../middleware/auth.js");
const Post = require("../models/post.js");
const roleAuth = require("../middleware/roleAuth.js");

const router = express.Router();

// Create a new post
router.post(
  "/",
  authMiddleware,
  roleAuth(["author", "admin"]),
  async (req, res) => {
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
  }
);

// get all post
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find()
      .populate("author", "username email")
      .sort({ createdAt: -1 });

    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id).populate(
      "author",
      "username email"
    );

    if (!post) {
      return res.status(404).json({ message: " Post not Found" });
    }

    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: "server error", error });
  }
});

// update post
router.put(
  "/:id",
  authMiddleware,
  roleAuth(["author", "admin"]),
  async (req, res) => {
    try {
      const { title, content, tags, isPublished } = req.body;
      const post = await Post.findById(req.params.id);

      if (!post) {
        return res.status(404).json({ message: "Post not found" });
      }

      // Check if the user is the author or admin
      if (post.author.toString() !== req.user.id && req.user.role !== "admin") {
        return res
          .status(403)
          .json({ message: "Unauthorized to update this post" });
      }

      // Update fields
      post.title = title || post.title;
      post.content = content || post.content;
      post.tags = tags || post.tags;
      post.isPublished =
        isPublished !== undefined ? isPublished : post.isPublished;

      await post.save();

      res.status(200).json({ message: "Post updated successfully", post });
    } catch (error) {
      res.status(500).json({ message: "Server error", error });
    }
  }
);

// delete post
router.delete(
  "/:id",
  authMiddleware,
  roleAuth(["author", "admin"]),
  async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);

      if (!post) {
        return res.status(400).json({ message: "post not found" });
      }

      if (post.author.toString() !== req.user.id && req.user.role !== "admin") {
        return res
          .status(403)
          .json({ message: "unauthorized to delete this post" });
      }

      await post.deleteOne();

      res.status(200).json({ message: "post deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: "server error", error });
    }
  }
);

module.exports = router;

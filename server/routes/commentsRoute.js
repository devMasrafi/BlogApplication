const express = require("express");
const Comment = require("../models/commentsModel.js");
const authMiddleware = require("../middleware/auth.js");
const Post = require("../models/postModel");
const router = express.Router();

// create new comments

router.post("/:postId", authMiddleware, async (req, res) => {
  try {
    const { content } = req.body;
    const { postId } = req.params;

    const post = await Post.findById(postId);
    if (!post) {
      return res.status(400).json({ message: "Post Not Found" });
    }
    // create
    const comment = new Comment({
      content,
      author: req.user.id,
      post: postId,
    });

    await comment.save();
    res.status(201).json({ message: "Comment Created Successfully", comment });
  } catch (error) {
    res.status(500).json({ message: "Server Error Comment Failed", error });
  }
});

// get all comments
router.get("/:postId", async (req, res) => {
  try {
    const { postId } = req.params;

    const comments = await Comment.find({ post: postId }).populate(
      "author",
      "username "
    );

    res.status(200).json({ comments });
  } catch (error) {
    res.status(500).json({ message: "Server Error Getting Commnents", error });
  }
});

// update comment

router.put("/:commentId", authMiddleware, async (req, res) => {
  try {
    const { commentId } = req.params;
    const { content } = req.body;

    const comment = await Comment.findById(commentId);

    if (!comment) {
      return res.status(400).json({ message: "Comment not found" });
    }

    if (comment.author.toString() !== req.user.id) {
      return res
        .status(403)
        .json({ message: "You are not allowed to update this comment" });
    }

    comment.content = content;
    await comment.save();

    res.status(200).json({ message: "Comment Updated successfully", comment });
  } catch (error) {
    res.status(500).json({ message: "Server Error Updating Comment", error });
  }
});

// delete comment
router.delete("/:commentId", authMiddleware, async (req, res) => {
  try {
    const { commentId } = req.params;

    const comment = await Comment.findByIdAndDelete(commentId);

    if (!comment) {
      return res.status(404).json({ message: "Comment not Found" });
    }

    res.status(200).json({ message: "Comment Deleted Successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error Deleting Comment", error });
  }
});

module.exports = router;

const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ message: "Unauthorized: Accesss denied" });
  }

  try {
    const decoded = jwt.verify(
      token.replace("Bearer", ""),
      process.env.JWT_SECRET
    );
    req.user = decoded;
    next();
  } catch (error) {
    res.status(400).json({ message: "invalid token", error });
  }
};

module.exports = authMiddleware;

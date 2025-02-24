const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/dbConnect");
const UserRoutes = require("./routes/userRoutes.js");
const authRoutes = require("./routes/authRoutes.js");
const user = require("./routes/user.js");
const postsRoute = require("./routes/postsRoutes.js");

// connection
dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", UserRoutes);
app.use("/api/v1", authRoutes);
app.use("/api/v1", user);
app.use("/api/v1/posts", postsRoute);

// console.log(process.env);
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`server runnig on port ${port}`);
});

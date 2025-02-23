const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/dbConnect");
const UserRoutes = require("./routes/userRoutes.js")

// connection
dotenv.config()
connectDB()

const app = express();
app.use(express.json())
app.use(cors());
app.use(express.urlencoded({ extended: true }));


app.use("/api/v1", UserRoutes)

// console.log(process.env.PORT);
const port = process.env.PORT

app.listen (port, ()=>{
    console.log(`server runnig on port ${port}`)
})

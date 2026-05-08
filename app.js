const express = require("express");
const connectDB = require("./config/db");
const routeBooks = require("./routes/routeBooks");
const routeUsers = require("./routes/routeUsers");
const routeOTP = require("./routes/routeOTP");
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
connectDB();

app.use("/", routeBooks);
app.use("/", routeUsers);
app.use("/", routeOTP);

app.listen(PORT, () => {console.log(`Server is running on port ${PORT}`)});
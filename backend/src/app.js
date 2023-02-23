const express = require("express");
const cors = require("cors");
const morgan = require("morgan")
const app = express();

//Settings
app.set("port", process.env.PORT || 8000);

//Middlewares
app.use(morgan('dev'))
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/users", require("./routes/user"));
app.use("/api/products", require("./routes/products"));

module.exports = app;

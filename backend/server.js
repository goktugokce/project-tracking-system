const express = require("express");
const app = express();


// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// database
const db = require("./models");

// db.sequelize.sync(); // This creates tables if don't exist (and does nothing if already exists)

// simple route
app.get("/", (req, res) => {
    res.json({ message: "MAIN PAGE" });
});

// routes
require('./routes/authRoutes')(app);


// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

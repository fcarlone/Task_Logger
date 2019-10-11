const express = require("express");

// Passport packages

// Set up the express app
const app = express();

const PORT = process.env.PORT || 5000;

// Models for syncing
const db = require("./models");

// Connect database

// Middleware

// Passport middleware

// Serve static assets

// Define routes

// Route to load single HTML page

// Test route (DELETE after front-end build)
app.get("/", (req, res) => {
  res.send("Test Server");
});

// Add listener
// app.listen(PORT, () => {
//   console.log(`Server started on Port: ${PORT}`);
// });

// Syncing our sequelize models and then starting our Express app
db.sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server started on Port: ${PORT}`);
  });
});

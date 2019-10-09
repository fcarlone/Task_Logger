const express = require("express");

// Passport packages

const app = express();

const PORT = process.env.PORT || 5000;

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
app.listen(PORT, () => {
  console.log(`Server started on Port: ${PORT}`);
});

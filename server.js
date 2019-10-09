const express = require("express");

const app = express();

const PORT = process.env.PORT || 5000;

// Test route (DELETE after front-end build)
app.get("/", (req, res) => {
  res.send("Test Server");
});

// Add listener
app.listen(PORT, () => {
  console.log(`Server started on Port: ${PORT}`);
});

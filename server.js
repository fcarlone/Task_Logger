const express = require("express");

// Passport packages
const session = require("express-session");
const passport = require("./config/passport");

// Set up the express app
const app = express();

const PORT = process.env.PORT || 5000;

// Models for syncing
const db = require("./models");

// Connect database

// Middleware
app.use(express.json({ extended: true }));
app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Serve static assets

// Define routes
require("./routes/apiOwners")(app);
require("./routes/apiUsers")(app);
// Route to load single HTML page

// Test route (DELETE after front-end build)
app.get("/", (req, res) => {
  res.send("Test Server");
});

// Syncing our sequelize models and then starting our Express app
db.sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server started on Port: ${PORT}`);
  });
});

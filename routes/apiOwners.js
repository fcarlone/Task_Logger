const db = require("../models");
const passport = require("../config/passport");

module.exports = function(app) {
  // Route for getting user data
  app.get("/api/user_data", (req, res) => {
    db.User.findAll({}).then(dbUsers => {
      res.json(dbUsers);
    });
  });
};

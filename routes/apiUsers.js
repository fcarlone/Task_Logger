const db = require("../models");
const passport = require("../config/passport");

module.exports = function(app) {
  // Route to get users data
  app.get("/api/user_data", (req, res) => {
    db.User.findAll({}).then(dbUsers => {
      res.json(dbUsers);
    });
  });

  // Route to post new user
  app.post("/api/user_data", (req, res) => {
    db.User.create(req.body).then(dbUsers => {
      res.json(dbUsers);
    });
  });
};

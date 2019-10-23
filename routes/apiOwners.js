const db = require("../models");
const passport = require("../config/passport");

module.exports = function(app) {
  // Route to get owners data
  app.get("/api/owner_data", (req, res) => {
    db.Owner.findAll({}).then(dbOwners => {
      res.json(dbOwners);
    });
  });

  // Route to post new owner
  app.post("/api/owner_data", (req, res) => {
    db.Owner.create(req.body).then(dbOwners => {
      res.json(dbOwners);
    });
  });
};

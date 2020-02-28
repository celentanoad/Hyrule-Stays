const Stay = require("../models/stay");
const User = require("../models/user");

module.exports = {
  index
};

function index(req, res) {
  Stay.find({}, function(err, stays) {
    if (err) return next(err);
    res.render("stays/index", {
      stays,
      user: req.user,
      name: req.query.name
    });
  });
}

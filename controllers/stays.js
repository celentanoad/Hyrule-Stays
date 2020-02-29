const Stay = require("../models/stay");
const User = require("../models/user");

module.exports = {
  index,
  new: newPage,
  create
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

function newPage(req, res) {
  res.render("stays/new", {
    user: req.user, name: req.query.name
  });
}

function create(req, res) {
  const stay = new Stay(req.body);
  stay.save(function(err) {
    if (err) return res.redirect("/stays/new");
    res.redirect("/stays");
  })
}
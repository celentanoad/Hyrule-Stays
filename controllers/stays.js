const Stay = require("../models/stay");
const User = require("../models/user");

module.exports = {
  index,
  new: newPage,
  create,
  show,
  delete: deleteOne
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

function deleteOne(req,res) {
  Stay.findByIdAndDelete(req.params.id, function (err, stay) {
    res.redirect("/stays");
  });
}

function show(req, res) {
  Stay.findById(req.params.id, function(err, stay) {
    res.render("stays/show", {stay, user:req.user, name:req.query.name})
  });
}

function newPage(req, res) {
  if (!req.user) return res.redirect("/stays");
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
const Stay = require("../models/stay");
const User = require("../models/user");

module.exports = {
  index,
  new: newPage,
  create,
  show,
  delete: deleteOne,
  showUpdate,
  update
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

function showUpdate(req, res) {
  Stay.findById(req.params.id, function(err, stay) {
    if (stay.userCreated.equals(req.user._id)) {
      res.render("stays/edit", {stay, user:req.user, name: req.query.name});
    } else {
      res.redirect("/stays");
    }
  });
}

function update(req,res) {
  Stay.findByIdAndUpdate(req.params.id, req.body, function(err, stays) {
    res.redirect("/stays/");
  })
}

function deleteOne(req,res) {
  Stay.findById(req.params.id, function (err, stay) {
    console.log(stay);
    if (stay.userCreated.equals(req.user._id)) {
    Stay.findByIdAndDelete(req.params.id, function(err, stay) {
      res.redirect("/stays");
      });
    }
    else {
      res.redirect("/stays");
    }
  })
}

function show(req, res) {
  Stay.findById(req.params.id, function(err, stay) {
    res.render("stays/show", {stay, user:req.user, name:req.query.name})
  });
}

function newPage(req, res) {
  res.render("stays/new", {
    user: req.user, name: req.query.name
  });
}

function create(req, res) {
  const stay = new Stay(req.body);
  stay.userCreated = req.user._id;
  stay.save(function(err) {
    if (err) return res.redirect("/stays/new");
    res.redirect("/stays");
  })
}
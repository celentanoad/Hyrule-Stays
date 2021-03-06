const User = require("../models/user");
const Stay = require("../models/stay");

module.exports = {
    index,
    show,
    createAlias,
    addFavorite
}

function index(req, res, next) {
    res.render();
}

function show(req, res) {
    res.render("account", {user: req.user});
}

function createAlias(req, res) {
    User.findById(req.user._id, function(err, user) {
        user.alias = req.body.alias;
        user.save(function(err) {
            res.redirect("/stays");
        });
    });
}

function addFavorite(req, res) {
    res.redirect("/stays");
}

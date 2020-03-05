const User = require("../models/user");

module.exports = {
    index,
    show,
    createAlias,
    updateFavorites
}

function index(req, res, next) {
    res.render();
}

function show(req, res) {
    res.render("account", {user: req.user});
}

function updateFavorites(req, res) {
    User.findById(req.user._id, function(err, user) {
        console.log(req.body);
        res.redirect(`account/${user._id}`);
    });
}

function createAlias(req, res) {
    User.findById(req.user._id, function(err, user) {
        user.alias = req.body.alias;
        user.save(function(err) {
            res.redirect("/stays");
        });
    });
}
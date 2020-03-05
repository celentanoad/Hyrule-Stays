const User = require("../models/user");

module.exports = {
    index,
    show,
    createAlias,
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
const Stay = require("../models/stay");

module.exports = {
    showRegionsPage
}

function showRegionsPage(req, res) {
    res.render("regions", {
        user: req.user,
        name: req.query.name
    });
}


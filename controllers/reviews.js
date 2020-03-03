const Stay = require("../models/stay");

module.exports = {
    create
};


function create(req, res) {
    Stay.findById(req.params.id, function(err, stay) {
        req.body.userId = req.user._id;
        req.body.userName = req.user.alias;
        stay.reviews.push(req.body);
        stay.save(function(err) {
            res.redirect(`/stays/${req.params.id}`)
        });
    });
}


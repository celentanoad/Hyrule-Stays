const Stay = require("../models/stay");

module.exports = {
    create
};


function create(req, res) {
    Stay.findById(req.params.id, function(err, stay) {
        if (!req.user) return res.redirect(`/stays/${req.params.id}`)
        stay.reviews.userId = req.user.id;
        stay.reviews.push(req.body);
        console.log(stay.reviews);
        stay.save(function(err) {
            res.redirect(`/stays/${req.params.id}`)
        });
    });
}


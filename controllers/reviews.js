const Stay = require("../models/stay");
const User = require("../models/user");

module.exports = {
    create,
    delete: deleteOne
};


function create(req, res) {
    Stay.findById(req.params.id, function(err, stay) {
        req.body.userId = req.user._id;
        req.body.userName = req.user.alias;
        stay.reviews.push(req.body);
        let total = 0;
        for (i = 0; i < stay.reviews.length; i++) {
            total += stay.reviews[i].rating;
        }
        stay.avgRating = (total / stay.reviews.length).toFixed(1);
        stay.save(function(err) {
            res.redirect(`/stays/${req.params.id}`)
        });
    });
}


function deleteOne(req, res) {
    Stay.findOne({"reviews._id" : req.params.id}, function(err, stay) {
        const selectedReview = stay.reviews.id(req.params.id);
        const idx = stay.reviews.indexOf(selectedReview);
        if (req.user._id.equals(selectedReview.userId)) {
            stay.reviews.splice(idx, 1);
            let total = 0;
            for (i = 0; i < stay.reviews.length; i++) {
                total += stay.reviews[i].rating;
            }
            stay.avgRating = (total / stay.reviews.length).toFixed(1);
            stay.save(function(err) {
                res.redirect(`/stays/${stay._id}`);
            });
        } else {
            res.redirect(`/stays/${stay._id}`);
        }
    });
}

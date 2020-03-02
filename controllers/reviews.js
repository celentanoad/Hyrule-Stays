const Review = require("../models/review");
const Stay = require("../models/stay");

module.exports = {
    create
};



function create(req, res) {
    Stay.findById(req.params.id, function(err, stay) {
        stay.reviews.push(req.body);
        stay.save(function(err) {
            console.log(stay);
            res.redirect(`/stays/${req.params.id}`)
        });
    });
}
    //     req.body.stay = req.params.id;
    //     Review.create(req.body, function(err, reviews) {
    //         res.redirect(`/stays/${req.params.id}`)
    //     });
    // }
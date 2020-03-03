const Stay = require("../models/stay");

module.exports = {
    create,
    delete: deleteOne
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

function deleteOne(req,res) {
    if (stay.userCreated.equals(req.user._id)) {
    Stay.findById(req.params.id, function(err, stay) {
        console.log(stay.review._id);
        res.redirect(`/stays/${req.params.id}`);
        })
    } else {
        res.redirect(`/stays/${req.params.id}`);
    }
}

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
    console.log(req.query.name)
    res.redirect("/stays");
}
//     let stay = Stay.findById()

//     Stay.findById(req.params._id, function(err, stay) {
//         console.log(stay);
//         User.findById(req.user._id, function(err, user) {
//             // user.favorites.push(stay);
//             user.save(function(err) {
//                 res.redirect(`/users/${req.user}`);
//             })
//         })
//     })
// }
//     stay = Stay.findById(req.params._id);
//     console.log(stay)
//     User.findById(req.user._id, function(err, user) {
//         // user.favorites.push(stay);
//         user.save(function(err) {
//             res.redirect(`/users/${req.user}`);
//         });
//         console.log(user.name)
//         console.log(user.favorites)
//     });
// }
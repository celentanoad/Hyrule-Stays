const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema ({
    content: {type: String, required: true},
    rating: {type: Number, min: 1, max: 5, default: 5},
    date: {type: Date},
    // stay: {type: Schema.Types.ObjectId, ref: "Stay"},
    userName: {type: String},
    userId: {type: Schema.Types.ObjectId, ref: "User"}
})

module.exports = mongoose.model("Review", reviewSchema);
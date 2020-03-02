const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema ({
    content: {type: String, required: true},
    rating: {type: Number, min: 1, max: 5, default: 5},
    // stay: {type: Schema.Types.ObjectId, ref: "Stay"},
    userName: {type: String},
    userId: {type: Schema.Types.ObjectId, ref: "User"}
    }, {
    timestamps: true
});


const staySchema = new Schema({
    name: {type: String},
    region: {type: String, enum: ["Akkala", "Central Hyrule", "Dueling Peaks", "Eldin", "Faron", "Gerudo Highlands", "Great Plateau", "Hateno", "Hebra", "Lake Hylia", "Lanayru", "Ridgeland", "Tabantha", "Great Hyrule Forest", "Gerudo Wasteland"]},
    // avgRating: {type: Number},
    userCreated: {type: Schema.Types.ObjectId, ref: "User"},
    reviews: [reviewSchema]
});

module.exports = mongoose.model("Stay", staySchema);

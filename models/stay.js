const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const staySchema = new Schema({
    name: {type: String},
    region: {type: String, enum: ["Akkala", "Central Hyrule", "Dueling Peaks", "Eldin", "Faron", "Gerudo Highlands", "Great Plateau", "Hateno", "Hebra", "Lake Hylia", "Lanayru", "Ridgeland", "Tabantha", "Great Hyrule Forest", "Gerudo Wasteland"]},
    avgRating: {type: Number}
});

module.exports = mongoose.model("Stay", staySchema);

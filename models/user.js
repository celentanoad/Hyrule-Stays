const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    email: String,
    alias: String, 
    googleId: String,
    favorites: [{type: Schema.Types.ObjectId, ref: "Stay"}]
}, {
    timestamps: true
});

module.exports = mongoose.model("User", userSchema);

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const nameSchema = new Schema({
    _id: { type: Schema.Types.ObjectId, required: true },
    name: { type: String, required: true},
    gender: { type: String, required: true},
    origin: { type: String, required: true},
    date: {type: Date, default: Date.now }
}, { _id: false });

const Name = mongoose.model("Name", nameSchema);

module.exports = Name;
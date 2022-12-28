const mongoose = require('mongoose');

const citySchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    name: String,
    state: String,
    country: String
});

module.exports = mongoose.model('City', citySchema);
const mongoose = require('mongoose');

const kinoSchema = new mongoose.Schema({
    kinoName: {
        type: String,
        required: true,
    },

    img: {
        type: String,
        required: true,
    },
    year: Number,
    producer: {
        type: String,
        required: true,
    },
    description: String,
    cost: Number,
    income: Number,
});

module.exports = mongoose.model('kino', kinoSchema);
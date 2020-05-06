const express = require('express');
const mongoose = require("mongoose");
const router = express.Router();
const schema = mongoose.Schema;

const houseSchema = new schema({
    location: String,
    bd: Number,
    ba: Number,
    sqft: Number,
    price: Number,
    description: String,
    hometype: String,
    rating: Number,
    gallery: [String],
    features: {
        pets: { type: String, default: '-' },
        heating: { type: String, default: 'Forced air' },
        parking: { type: String, default: '-' },
        laundry: { type: String, default: '-' },
        pool: { type: String, default: '-' },
        gym: { type: String, default: '-' }
    },
    zipcodeID: String
})


House = mongoose.model("House", houseSchema, "houses");

router.get('/', async (req, res) => {
    res.send(await House.find({}))
})


module.exports = router;
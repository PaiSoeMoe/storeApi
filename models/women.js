const mongoose = require("mongoose");
const schema = mongoose.Schema;

women = new schema({
    name: String,
    isActive: Boolean,
    newPrice: Number,
    oldPrice: Number,
    img: [String],
    category: String,
    categoryLink: String,
    color: [String],
    onsale: Boolean,
    instock: Boolean,
    size: [String],
    detail: String
})

module.exports = mongoose.model('women', women, 'women');
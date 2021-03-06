const express = require('express');
const router = express.Router();
const men = require('./models/men');
const women = require('./models/women');


router.get('/', async (req, res) => {
    let w = await women.find({ category: "jackets-outerwear" })
    let m = await men.find({ category: "jackets-outerwear" })
    let products = w.concat(m);

    res.send(products);

})


module.exports = router;
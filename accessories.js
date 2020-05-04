const express = require('express');
const router = express.Router();
const men = require('./models/men');
const women = require('./models/women');


router.get('/', async (req, res) => {
    let w = await women.find().or([{ category: "sunglasses" }, { category: "bags-backpacks" }])
    let m = await men.find().or([{ category: "sunglasses" }, { category: "bags-backpacks" }, { category: "hats-beanies" }])
    let products = w.concat(m);

    res.send(products);

})


module.exports = router;
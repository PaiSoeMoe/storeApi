const express = require('express');
const router = express.Router();
const product = require('./models/men');


router.get('/', async (req, res) => {

    let cate = req.query.subcategory;

    if (req.query.id !== "undefined") {
        res.send(JSON.parse(await product.findById(id)));
    }
    else if (cate === 'all') {

        res.send(JSON.parse(await product.find({})));
    } else {
        res.send(JSON.parse(await product.find({ category: cate })))

    }
})


module.exports = router;
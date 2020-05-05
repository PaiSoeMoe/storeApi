const express = require('express');
const router = express.Router();
const product = require('./models/men');


router.get('/', (req, res) => {

    let cate = req.query;
    res.send(cate);
    // if (req.query.id !== "undefined") {
    //     res.send(await product.findById(id));
    // }
    // else if (cate === 'all') {

    //     res.send(await product.find({}));
    // } else {
    //     res.send(await product.find({ category: cate }))

    // }
})


module.exports = router;
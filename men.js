const express = require('express');
const router = express.Router();
const product = require('./models/men');


mongoose.model('haha', haha);
router.get('/', async (req, res) => {

    //let cate = req.query.subcategory;
    product.find({ category: "hoodies-sweatshirts" }).then((d) => {
        res.send(d);
    });

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
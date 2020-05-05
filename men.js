const express = require('express');
const router = express.Router();
const { Men } = require('./models/men');


router.get('/', async (req, res) => {
    Men.find({}).then((data) => {
        res.send(data);
    })
    // let cate = req.query.subcategory;

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
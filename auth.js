const auth = require('./middleware/auth');
const bcrypt = require('bcryptjs');
const { User } = require('./models/account');
const _ = require("lodash");
const mongoose = require('mongoose');
const express = require('express');
const Joi = require("joi");
const router = express.Router();


router.get('/me', auth, async (req, res) => {
    const user = await User.findById(req.user._id).select('-password');
    res.send(user);
})


router.post('/', async (req, res) => {

    console.log(req.body);
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let user = await User.findOne({ email: req.body.email })
    if (!user) return res.status(400).send("Invalid email or password.");

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) return res.status(400).send("Invalid email or password.");

    let token = user.generateAuthToken();

    res.send({ 'x-auth-token': token });
})

function validate(req) {

    const schema = {
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(5).max(1024).required()
    }
    return Joi.validate(req, schema);
}



module.exports = router;
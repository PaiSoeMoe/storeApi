const jwt = require('jsonwebtoken');
const config = require('config');
const mongoose = require("mongoose");
const schema = mongoose.Schema;
const Joi = require("joi");

accountSchema = new schema(
    {
        name: {
            type: String,
            required: true,
            minlength: 5,
            maxlength: 50
        },
        email: {
            type: String,
            required: true,
            minlength: 5,
            maxlength: 255,
            unique: true
        },
        password: {
            type: String,
            required: true,
            minlength: 5,
            maxlength: 1024
        },
        order: [String],
        cart: [String],
        address: String,
        payment: String,
    })

accountSchema.methods.generateAuthToken = function () {
    token = jwt.sign({ _id: this._id }, config.get('jwtPrivateKey'));
    return token;
};

function validateUser(user) {
    console.log(user);
    const schema = {
        name: Joi.string().min(5).max(50).required(),
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(5).max(1024).required()
    }
    return Joi.validate(user, schema);
}

exports.validate = validateUser;
exports.User = mongoose.model('accounts', accountSchema)
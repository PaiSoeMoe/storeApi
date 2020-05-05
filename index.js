const config = require('config');
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const men = require("./men");
const women = require("./women");
const accessories = require("./accessories")
const shoes = require("./shoes");
const register = require('./register');
const auth = require('./auth');
const newArrival = require('./new-arrival');
app.use(cors());

var status = "not connected"
require('./prod')(app);

if (!config.get('jwtPrivateKey')) {
    console.error("FATAL ERROR: jwtPrivateKey is not defined.");;
    process.exit(1);
}

mongoose.connect(config.get("db"))
    .then(() => status = "Mongodb connected")
    .catch((err) => console.log(err));


app.use(express.json());
app.use('/men', men);
app.use('/women', women);
app.use('/accessories', accessories);
app.use('/new-arrival', newArrival);
app.use('/shoes', shoes);
app.use('/register', register);
app.use('/login', auth);





app.get('/', (req, res) => {
    res.send(status);
})



// app.get('/', (req, res) => {

//     res.send(products);
// })
const port = process.env.PORT || 3000;
app.listen(port, () => { console.log("listening port 3000......") });
const express = require('express');
const router = express.Router();


var users = [
    {
        id: 1, user_id: 369583954
    },
    { id: 2, user_id: 44196397 },
    { id: 3, user_id: 167421802 },
    { id: 4, user_id: 59553554 },
    { id: 5, user_id: 141341662 }

]
var T = new Twit({
    consumer_key: config.get('consumer_key'),
    consumer_secret: config.get('consumer_secret'),
    access_token: config.get('access_token'),
    access_token_secret: config.get('access_token_secret'),
    timeout_ms: 60 * 1000,
    strictSSL: true,
});


router.get('/', async (req, res) => {
    let id = Number(req.query.id);
    let user_id = users.find(x => { return x.id === id }).user_id
    res.send(
        await T.get('statuses/user_timeline', {
            user_id: user_id
            , count: 9,
        })
    );
})


module.exports = router;
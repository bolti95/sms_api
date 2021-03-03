const {Router} = require('express');
const router = Router();
const sms_send = require('../controllers/sms_send');
const request = require('request');
const config = require('../auth/config')
require('dotenv').config;

router.get('/', (req, res) => {
    res.send('Hello world!');
})

router.post('/send', async (req, res) => {
    auth = config.auth;
    data = req.body;
    let to = '44' + data.to;
    let content = data.content;
    let from = data.from;
    console.log(data)
    if (to == '' || content == '' || from == ''){
        res.send({error: 'Please provide all details'})
        res.status(422).send({error: 'Please provide all details'})
    } else {               
            res.status(200)
            console.log(to, data.content, data.from);
            res.send({message : 'text message sent'});
            sms_send(data);
        }
    }

)

module.exports = router;

// let data = await sms_send(req.body.to, req.body.from, req.body.content) 
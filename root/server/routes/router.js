const {Router} = require('express');
const router = Router();
// const sms_send = "../controllers/sms_send";
const request = require('request');
require('dotenv').config;

router.get('/', (req, res) => {
    res.send('Hello world!');
})

router.post('/send', async (req, res) => {
    data = req.body 
    let to = '44' + data.to;
    let content = data.content;
    let from = data.from;
    console.log(data)
    if (to == '' || content == '' || from == ''){
        res.send({error: 'Please provide all details'})
        res.status(422).send({error: 'Please provide all details'})
    } else {               
        let options = {
            'method': 'POST',
            'url': 'https://rest-api.d7networks.com/secure/send',
            'headers': {
                'Content-Type': 'application/json',
                'Authorization': process.env.AUTH_KEY
            },
            body: 
                `{
                    \n\t\"to\":\"${to}\",
                    \n\t\"content\":\"${data.content}\",
                    \n\t\"from\":\"${data.from}\",
                    \n\t\"dlr\":\"yes\",
                    \n\t\"dlr-method\":\"GET\",
                    \n\t\"dlr-level\":\"2\",
                    \n\t\"dlr-url\":\"http://yourcustompostbackurl.com\"\n
                }`
    
        }
        request(options, function (error, response) {
            if (error) throw new Error(error);
            console.log(response.body);
        });
        }
        res.status(200)
        console.log(to, data.content, data.from);
        res.send({message : 'text message sent'});
        // sms_send(data); function TypeError
    }

)

module.exports = router;

// let data = await sms_send(req.body.to, req.body.from, req.body.content) 
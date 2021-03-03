//created an sms function, TypeError:
//sms_send is not a function at router.post
require('dotenv').config;
const fetch = require('node-fetch');

const sms_send = async (data) => {
    // let data = await data.json()
    let to = data.to;
    let from = data.from;
    let content = data.content;
    let request = require('request');
    let options = {
        'method': 'POST',
        'url': 'https://rest-api.d7networks.com/secure/send',
        'headers': {
            'Content-Type': 'application/json',
            'Authorization': process.env.AUTH_KEY
        },
        body: `{\n\t\"to\":\"${to}\",\n\t\"content\":\"${content}\",\n\t\"from\":\"${from}\",\n\t\"dlr\":\"yes\",\n\t\"dlr-method\":\"GET\", \n\t\"dlr-level\":\"2\", \n\t\"dlr-url\":\"http://yourcustompostbackurl.com\"\n}`
    }
    request(options, function (error, response) {
        if (error) throw new Error(error);
        console.log(response.body);
    });
    console.log('message sent successfully')
}

module.exports = sms_send;
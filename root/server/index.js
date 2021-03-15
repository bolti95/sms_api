//stating app requirments 
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 3006;
require('dotenv').config();

// init app
const app = express();

//template engine setup
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

const router = require('./routes/router');

app.use('/', router);

//body parser middleware 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//catch form submit 
app.post('/send', router);



//define port and start server
app.listen(port, () => {
	console.log(`The SMS app listening at http://localhost:${port}`)
})

require('dotenv').config(); //using dotenv to run server

const config = {
    auth: process.env.AUTH_KEY,
    // port: process.env.DB_PORT,
    }
module.exports = config
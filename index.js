require('dotenv').config();
const express = require('express');
const router = require('./src/app/router');
const app = express();
const port = process.env.PORT
app.use('/',router)
app.listen(port,() => {
    console.log('listen port', port)
})
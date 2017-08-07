process.env.NODE_ENV = process.env.NODE_ENV || 'local';

const express = require('./config/express');
const db = require ('./config/db');
// const app = express();


const port = process.env.PORT || 3001;


app.listen(port);
module.exports = app;

console.info('Server running on port: ' + port);
// Import Stuff
require('dotenv').config();
const _ = require('lodash');
const bodyParser = require('body-parser');
const express = require('express');
const jwt = require('jsonwebtoken');
const morgan = require('morgan');

// Import Models

// Import Controllers

const app = express();
const routes = require('./routes/');


//Apply Middleware
app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(enableCORS);

// Alternative Routes?
app.use('/api', routes);

app.get('/', (req, res, next) =>{
    next();
});

function enableCORS(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
}

module.exports = app;
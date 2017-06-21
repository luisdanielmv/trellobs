// Import Stuff
require('dotenv').config();
const _ = require('lodash');
const bodyParser = require('body-parser');
const express = require('express');
const jwt = require('jsonwebtoken');
const morgan = require('morgan');
const passport = require('passport');
const passportJWT = require('passport-jwt');

// Import Models
// require('./models/note');

// Import Controllers
// notesAPI = require('./controllers/notesController');

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
    console.log(req);
    next();
});

function enableCORS(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
}

module.exports = app;
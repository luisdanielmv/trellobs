require('dotenv').config();
require('start.js');

const express = require('express'),
      routes = require('./routes/'),
      port = 7777;

let app = express();

app.use('/api', routes);

app.get(
    '/',
    (req, res) => {
        res.send('Hello World' + process.env.DB);
    });

app.get(
    '/notes',
    (req, res) => {
        res.json({
            "title" : 'Hello World'
        });
    });

app.listen(port, () => {
    console.log(`Express listening on port ${port}`);
    });

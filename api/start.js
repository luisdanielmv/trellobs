require('dotenv').config();
const mongoose = require('mongoose');
const app = require('./app.js');

mongoose.Promise = global.Promise;

mongoose.connect(`mongodb://${process.env.DB}`, (err) => {
    console.log(process.env.DB);
    if (err) {
        console.log(`Error Potato: ${err}`);
    } else {
        console.log(`Connected to Mongo`);
    }
});

app.set('port', process.env.PORT || 7777);

app.listen(process.env.PORT, () =>{
    console.log(`Server running on Port ${process.env.PORT}`);
});
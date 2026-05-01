const mongoose = require('mongoose');

function dbconfig() {
    mongoose.connect('mongodb://localhost:27017/music')
    .then(() => {console.log('Connected to MongoDB')})
    .catch((err) => {console.error('Error connecting to MongoDB', err)});
}

module.exports = dbconfig;
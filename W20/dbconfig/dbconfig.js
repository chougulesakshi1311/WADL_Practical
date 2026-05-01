const mongoose = require('mongoose');

function dbconfig() {
    mongoose.connect('mongodb://localhost:27017/employee')
    .then(() => console.log('MongoDB connected'))
    .catch(err=> console.log('Could not connect to mongoDB', err));
}

module.exports = dbconfig;
const mongoose = require('mongoose');

function dbconfig(){
    mongoose.connect("mongodb://127.0.0.1:27017/students")
    .then(()=>console.log("MongoDB Connected"))
    .catch(err=>console.log(err));
}

module.exports = dbconfig;
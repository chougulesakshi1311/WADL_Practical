const express = require('express');
const path = require('path');

const app = express();

const dbconfig = require('./dbconfig/dbconfig');
const studentRoutes = require('./routes/student');

dbconfig();

app.use(express.static(path.join(__dirname, 'frontend')));
app.use(express.json());

app.use('/student', studentRoutes);

app.listen(3000, ()=>{
    console.log("Server running on port 3000");
});
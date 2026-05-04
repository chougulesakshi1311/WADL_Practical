const express = require('express');
const path = require('path');

const app = express();

const dbconfig = require('./dbconfig/dbconfig');
const songRoutes = require('./routes/song');

dbconfig();

app.use(express.static(path.join(__dirname, 'frontend')));
app.use(express.json());

app.use('/songs', songRoutes);

app.listen(3000, ()=>{
    console.log("Server running on port 3000");
});
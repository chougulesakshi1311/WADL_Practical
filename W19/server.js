const express = require('express');
const cors = require('cors');

const app = express();

const dbconfig = require('./dbconfig/dbconfig');
const studentRoutes = require('./routes/student');

dbconfig();

app.use(cors());
app.use(express.json());

app.use('/student', studentRoutes);

app.listen(3000, ()=>{
    console.log("Server running on port 3000");
});
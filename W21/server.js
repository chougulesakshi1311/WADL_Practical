const express = require('express');
const app = express();
const path = require('path');
const bookRoutes = require('./routes/book');
const dbconfig = require('./dbconfig/dbconfig');

dbconfig();

app.use(express.static(path.join(__dirname, 'frontend')));
app.use(express.json());

app.use('/books', bookRoutes);

app.listen(3000, ()=> {
    console.log("Server is running on 3000");
});
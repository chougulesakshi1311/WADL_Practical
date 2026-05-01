const express = require('express');
const app = express();
const cors = require('cors');
const dbconfig = require('./dbconfig/dbconfig.js');
const bookRoutes = require('./routes/book.js');

dbconfig();

app.use(cors());
app.use(express.json());

app.use('/books', bookRoutes);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
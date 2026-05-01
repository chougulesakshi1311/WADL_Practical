const express = require('express');
const app = express();
const dbconfig = require('./dbconfig/dbconfig');
const employeeRoutes = require('./routes/employee');

const cors = require('cors');
app.use(cors());

dbconfig();

app.use(express.json());
app.use('/employees', employeeRoutes);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
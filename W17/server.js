const express = require ('express');
const fs = require('fs');
const path = require('path');
const app = express();

app.use(express.static('public'));

app.get('/api/employees', (req, res) => {
    fs.readFile('employee.json', 'utf8', (err, data) => {
        if(err) {
            res.status(500).json({error: err.message});
        }
        res.json(JSON.parse(data));
    }) 
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
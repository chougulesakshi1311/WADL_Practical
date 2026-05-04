const express = require('express');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/api/employees', (req, res) => {
    fs.readFile('employee.json', 'utf-8', (err, data) => {
        if(err) {
            res.status(500).json({error: err.message});
        }
        res.json(JSON.parse(data));
    }) 
}) 

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
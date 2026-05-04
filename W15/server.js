const express = require('express');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 3000;

// serve frontend
app.use(express.static('public'));

// API
app.get('/api/products', (req, res) => {
    fs.readFile('./products.json', 'utf-8', (err, data) => {
        if (err) return res.status(500).send("Error");
        res.json(JSON.parse(data));
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
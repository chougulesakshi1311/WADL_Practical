const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 3000;

// Serve frontend files
app.use(express.static('public'));

// API route
app.get('/api/users', (req, res) => {
    fs.readFile('./users.json', 'utf-8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: "Error reading file" });
        }
        res.json(JSON.parse(data));
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
// Create web server
// Create a new web server using Express.js
const express = require('express');
const app = express();

// Import comments from comments.json
const comments = require('./comments.json');

// Serve comments.json as a static file
app.use(express.static('comments.json'));

// Serve comments as a JSON object
app.get('/comments', (req, res) => {
    res.json(comments);
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
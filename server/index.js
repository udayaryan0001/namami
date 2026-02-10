console.log("Starting server script...");
const express = require('express');
console.log("Express loaded");
const mongoose = require('mongoose');
console.log("Mongoose loaded");
const cors = require('cors');
const dotenv = require('dotenv');

console.log("Configuring dotenv");
dotenv.config();

console.log("Creating app");
const app = express();
const PORT = process.env.PORT || 5000;
console.log(`Port set to ${PORT}`);

app.use(cors());
app.use(express.json());

const path = require('path');

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../client/dist')));

// API Routes
app.get('/api', (req, res) => {
    res.send('Namami Waters API is running');
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.use((req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

// Connect to MongoDB (Placeholder URI)
// mongoose.connect(process.env.MONGO_URI)
//   .then(() => console.log('MongoDB Connected'))
//   .catch(err => console.error(err));

const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
}).on('error', (err) => {
    console.error('Server failed to start:', err);
});

module.exports = app;

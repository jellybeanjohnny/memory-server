// Dependencies
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/index');
// Mongodb url 
const databaseURL = process.env.DATABASE_URI || "mongodb://localhost/memorydb";
const PORT = process.env.PORT || 8080;

const app = express();

mongoose.connect(databaseURL);

app.use('/search', routes);

app.listen(PORT, function() {
    console.log('Memory-Server listening on port %s', PORT);
});
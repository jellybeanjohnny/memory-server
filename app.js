const express = require('express');
const http = require('http');
const url = require('url');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const databaseURL = process.env.DATABASE_URI || "mongodb://localhost/memorydb";
const PORT = process.env.PORT || 8080;

const app = express();
const server = http.createServer(app);

server.listen(PORT, function() {
    console.log('Memory-Server listening on port %s', server.address().port);
});
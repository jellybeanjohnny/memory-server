const express = require('express');
const bodyParser = require('body-parser');
const url = require('url');
const JMDict = require('../models/JMDict');
const router = express.Router();

router.get('/', function (request, response) {
    var term = request.query.term;
    console.log(request.query.term);
    
    JMDict.find({$or:[{kanji:{ $elemMatch: {text: term}}}, {kana:{ $elemMatch: {text: term}}}]}, function(err, items) {
        if (err) {
            console.log(err);
            response.status(500).json({'error' : err});
        }
        response.status(200).json({'items' : items});
    });
});

module.exports = router;
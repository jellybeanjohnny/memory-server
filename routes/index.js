const express = require('express');
const bodyParser = require('body-parser');
const url = require('url');
const JMDict = require('../models/JMDict');
const router = express.Router();


router.get('/', function (request, response) {
    var term = request.query.term;
    response.send('You searched for: ' + term);
    console.log(request.query.term);
    
    console.log('Inside home');
    JMDict.find({$or:[{kanji:{ $elemMatch: {text: term}}}, {kana:{ $elemMatch: {text: term}}}]}, function(err, items) {
        console.log('Hello!');
        if (err) {
            console.log(err);
        }
        console.log(items[0].kanji[0].text);
    });
});

module.exports = router;
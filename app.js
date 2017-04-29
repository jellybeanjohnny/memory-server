const express = require('express');
const http = require('http');
const url = require('url');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const databaseURL = process.env.DATABASE_URI || "mongodb://localhost/memorydb";
const PORT = process.env.PORT || 8080;

const app = express();
const server = http.createServer(app);

var Schema = mongoose.Schema;

mongoose.connect(databaseURL);

var jmdictSchema = new Schema({
    id : Number, 
    kanji : [ {
      common : Boolean, 
      text : String, 
      tags : [ String ]
    } ], 
    kana : [ {
      common : Boolean, 
      text : String, 
      tags : [ String ], 
      appliesToKanji : [ String ]
    } ], 
    sense : [ {
      partOfSpeech : [ String ], 
      appliesToKanji : [ String ], 
      appliesToKana : [ String ], 
      related : [ [ String ], [ String ] ], 
      antonym : [ String ], 
      field : [ String ], 
      dialect : [ String ], 
      misc : [ String ], 
      info : [ String ], 
      languageSource : [ String ], 
      gloss : [ {
        lang : String, 
        text : String
      } ]
    } ]
},
{collection: 'JMDict'}
);

var JMDict = mongoose.model('JMDict', jmdictSchema);

app.get('/', function (request, response) {
    response.send('HOME');
    console.log('Inside home');
    JMDict.find({$or:[{kanji:{ $elemMatch: {text: "漢数字ゼロ"}}}, {kana:{ $elemMatch: {text: "かんすうじゼロ"}}}]}, function(err, items) {
        console.log('Hello!');
        if (err) {
            console.log(err);
        }
        console.log(items);
    });
});

server.listen(PORT, function() {
    console.log('Memory-Server listening on port %s', server.address().port);
});
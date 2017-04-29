const mongoose = require('mongoose');

var jmdictSchema = new mongoose.Schema({
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

module.exports = JMDict;
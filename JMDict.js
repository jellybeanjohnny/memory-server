
    {"id" : 1000080, 
    "kanji" : [ {
      "common" : false, 
      "text" : "漢数字ゼロ", 
      "tags" : [  ]
    } ], 
    "kana" : [ {
      "common" : false, 
      "text" : "かんすうじゼロ", 
      "tags" : [  ], 
      "appliesToKanji" : [ "*" ]
    } ], 
    "sense" : [ {
      "partOfSpeech" : [ "?" ], 
      "appliesToKanji" : [ "*" ], 
      "appliesToKana" : [ "*" ], 
      "related" : [ [ "○", "まる", 1 ], [ "漢数字" ] ], 
      "antonym" : [  ], 
      "field" : [  ], 
      "dialect" : [  ], 
      "misc" : [  ], 
      "info" : [  ], 
      "languageSource" : [  ], 
      "gloss" : [ {
        "lang" : "eng", 
        "text" : "\"kanji\" zero"
      } ]
    } ]
  }


//1. convert the above to a mongoose schema using https://github.com/nijikokun/generate-schema
//2. load the JMDict file into mongodb using the schema. (bulk insert maybe?)
//3. create a model class (this file)?
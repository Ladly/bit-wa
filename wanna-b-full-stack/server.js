var express    = require('express');        
var app        = express();                 
var bodyParser = require('body-parser');
var port = 8081;        

var mongo = require('mongodb');
var url = "mongodb://localhost:27017/my_first_mongo_db";

var MongoClient = require('mongodb').MongoClient;

MongoClient.connect(url, (err, client) => {         // connect to server when 
      if (err) {
        throw new Error("something went wrong")
      }    
        db = client.db('my_first_mongo_db')
        app.listen(port);        
    });    
    
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    
    // this is just to allow CORS
    //god bless C/P :D

    app.use((req, res, next) => {               
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next(); // don't know why this is here but it doesn't work without it :D (well i know but i can't explain so it is- I don't know)
      });

    // next two functions are "legacy code" used while i was tring to get idea what the hell is going on
    app.get("/", (req, res) => {
        res.send("hello form my app")
    })
    
    // "legacy" used to get data from index sent by server
    app.get("/quotes", (req, res) => {                  
        res.sendFile(__dirname + '/index.html')
    })

    // this one will add new quote to youre database
    app.post('/quotes', (req, res) => {
        db.collection('quotes').save(req.body, (err, result) => {
            if (err) {
                throw new Error("something went wrong")
            // } else {
            //     res.redirect("/")  // this will be changed for externals so it is "legacy" too // dunno what to add here?
            }             
        })
    })   

    // when u want to get quotes go to this adress "http://localhost:8080/getquotes" 
    app.get('/getquotes', (req, res) => {                               
        db.collection("quotes").find({}).toArray((err, result) => {
            if (err) {
                throw new Error("something went wrong")
            } else {
                const resultToString = JSON.stringify(result)
                res.json(result)
            }
        });
      });

    // this function will delete wanted element from database (eventualy...)  
    app.delete('/deletequotes', (req, res) => {
        console.log(req.body.id); // this log works (will print id or whatever you send from frontend)

        db.collection("quotes").deleteOne({_id:req.body.id}, // this is line I cant make to work
        (err, result) => {
            if (err) {
                throw new Error('Fail to delete')
            }
            console.log("deleted");  // this event will be fired        
        })
    })   
    
    // this function is for editing existing quote
    app.put("/updateQuotes", (req, res) => {
        console.log(req.body); // this log also works (print whatever request come from frontend)
        
        db.collection("quotes").findOneAndUpdate( // *
            {_id: req.body.id}, 
            { 
                $set: {     // mongoDB api for updating
                name: req.body.name,
                quote: req.body.quote
                }
            },
            {
                upsert: true    // of query dont find wanted quote to update, this line will tell to add completly new quote
            },
        (err, result) => {
            if (err) {
                throw new Error('Fail to update');
            }
            console.log("updated"); // since upsert is true, when get req * line will fail and this event will be triggered       
        })                         
    })

console.log('Server at: ' + port); // just to see when all fine
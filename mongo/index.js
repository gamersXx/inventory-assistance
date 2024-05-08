var Express = require("express");
var Mongoclient = require("mongodb").MongoClient;
var cors = require("cors");
const multer = require("multer");

var app=Express();
app.use(cors());


var CONNECTION_STRING="mongodb+srv://baerproyecto:Baer123.@cluster0.yqz2aqo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

var DATABASENAME = "baer-db";
var database;

app.listen(5038, () => {
    Mongoclient.connect(CONNECTION_STRING,(error, client) => {
        database=client.db(DATABASENAME);
        console.log("Mongo Connect")
    });
})

app.get('/api/baer-db/GetNotes', (request, response) =>{
    database.collection("baercollection").find({}).toArray((error, result) =>{
        response.send(result);
    });
})

app.post('/api/baer-db/AddNotes', multer().none(),(request, response) =>{
    database.collection("baercollection").count({}, function(error,nunOfDocs){
        database.collection("baercollection").insertOne({
            id:(nunOfDocs+1).toString(),
            description: request.body.newNotes
        });

        response.json("Add perfect");
    })
})

app.delete('/api/baer-db/DeleteNotes', (request, response) => {
    database.collection("baercollection").deleteOne({
        id:request.query.id
    });
    response.json("Delete good")
})
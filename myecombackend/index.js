var express = require('express');
var cors = require('cors');
var bodyparser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var Objectid = require('mongodb').ObjectId;
const bodyParser = require('body-parser');

var app = express();
app.use(cors());

// const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://myecom:myecom@cluster0.jxghw.mongodb.net/myecom?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
var connection;
client.connect((err, db) => {
    if (!err) {
        connection = db;
        console.log("Success");
    } else {
        console.log("db error");
    }
});

app.post('/Register', bodyParser.json(), (req, res) => {
    var usercollection = connection.db('myecom').collection('register');
    usercollection.insert(req.body, (err, result) => {
        if (!err) {
            res.send({ status: 'ok', data: "registered successfully" });
        } else {
            res.send({ status: 'error', data: err })
        }
    })
})

app.get('/list', (req, res) => {
    var usercollection = connection.db('myecom').collection('register');
    usercollection.find().toArray((err, result) => {
        if (!err) {
            res.send({ status: 'ok', data: result });
        } else {
            res.send({ status: 'error', data: err })
        }
    })

})
app.post('/check-login', bodyParser.json() ,(req, res) => {
    var usercollection = connection.db('myecom').collection('register');
    usercollection.find({email:req.body.email, password:req.body.password}).toArray((err, result) => {
        if (!err && result.length>0) {
            res.send({ status: 'ok', data: result[0] });
        } else {
            res.send({ status: 'error', data: err })
        }
    })

})

app.post('/Addproduct', bodyParser.json(), (req, res) => {
    var usercollection = connection.db('myecom').collection('Product');
    usercollection.insert(req.body, (err, result) => {
        if (!err) {
            res.send({ status: 'ok', data: "Product added successfully" });
        } else {
            res.send({ status: 'error in adding product', data: err })
        }
    })
})

app.listen(4000, () => { console.log("on port 4000"); })
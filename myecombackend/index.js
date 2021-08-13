var express = require('express');
var cors = require('cors');
var bodyparser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var Objectid = require('mongodb').ObjectId;
const bodyParser = require('body-parser');
var upload = require('./multerConfig');
const { json } = require('body-parser');

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

// app.post('/Addproduct', bodyParser.json(), (req, res) => {
//     var usercollection = connection.db('myecom').collection('Product');
//     usercollection.insert(req.body, (err, result) => {
//         if (!err) {
//             res.send({ status: 'ok', data: "Product added successfully" });
//         } else {
//             res.send({ status: 'error in adding product', data: err })
//         }
//     })
// })

app.post('/Addproduct', async (req, res)=> {
    console.log("line 71----");
upload(req,res,(error)=>{
    if (error) {
        console.log("error uploading image");
        console.log(error);
        res.send({ status: 'error',data: error });
    }else{
        console.log("line 78 in index.js");
     var productcollection = connection.db('myecom').collection('Product');
     console.log("fileimage",req.files);
     console.log(req.body);
      productcollection.insert({logo:req.files.logo[0].filename,productid:req.body.id,producttitle:req.body.title,price:req.body.price},(err, result) => {
          if (!err) {
              res.send({status:"success",data:result});
              
          }else{
              res.send({status:"error",data:err});
          }
      })
    }
})
});

// app.post('/update-user', async (req,res)=>{
    
//     console.log("103--------------");
//     upload(req,res,(err)=>{
//         if (err) {
//             console.log("Error Occured during upload ");
//             console.log(err);
//             res.send({status:"failed", data:err});
//         }
//         else{
//             console.log("111---------------")
//             var studentCollection = connection.db('myecom').collection('Product');
//             console.log("files",req.files);
//             console.log("line 47");
//             console.log(req.body);
//             // var stdocs = {
//             //     profile:req.files.profile[0].filename,
//             //     resume:req.files.resume[0].filename,
//             //     certificates:req.files.certificates.map(c=>c.filename)
//             // }

//             studentCollection.update({_id:Objectid(req.body._id)},{$set:{logo:req.files.logo[0].filename, business_name:req.body.title}},(err,result)=>{
//                 if(!err)
//                 {

//                     res.send({status:"success", data:"business details updated sucessfully"});
//                 }
//                 else{
//                     res.send({status:"failed", data:err});

//                 }
//             })
//         }
//     });
// })



app.listen(4000, () => { console.log("on port 4000"); })
var express = require('express');
var cors = require('cors');
var MongoClient = require('mongodb').MongoClient;
var ObjectId= require('mongodb').ObjectId;
const bodyParser = require('body-parser');
var upload = require('./multerConfig');
var path = require('path');

var app = express();
app.use(cors());


app.use(express.static(path.join(__dirname,"uploads")));

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
app.get('/productlist',(req, res) => {
    var productcollectionlist = connection.db('myecom').collection('Product');
    productcollectionlist.find().toArray((err, result) => {
        if (!err) {
            res.send({ status: 'ok', data: result });
        } else {
            res.send({ status: 'error', data: err })
        }
    })

})

app.post('/product-detail', bodyParser.json() ,(req, res) => {
    var productcollectiondetail = connection.db('myecom').collection('Product');
    // console.log(req.body);
    productcollectiondetail.find({_id:ObjectId(req.body.id)}).toArray((err, result) => {
        if (!err && result.length>0) {
            res.send({ status: 'ok', data: result});
        } else {
            res.send({ status: 'error', data: err })
        }
    })

})


app.post('/Cart', bodyParser.json(), (req, res) => {
    var usercollection = connection.db('myecom').collection('Cart');
    usercollection.insert(req.body, (err, result) => {
        if (!err) {
            res.send({ status: 'ok', data: "Added successfully" });
        } else {
            res.send({ status: 'error', data: err })
        }
    })
});

app.get('/Cart-list', bodyParser.json() ,(req, res) => {
    var Cartcollectionlist = connection.db('myecom').collection('Cart');
    Cartcollectionlist.find({uemail:req.body.useremailcart}).toArray((err, result) => {
        console.log(req.body);
        if (!err) {
            // console.log("in index.js 101 cart-list no error");
            res.send({ status: 'ok', data: result });
        } else {
            res.send({ status: 'error', data: err })
        }
    })

})

app.post('/Wear-list', bodyParser.json() ,(req, res) => {
    var wcollectionlist = connection.db('myecom').collection('Product');
    wcollectionlist.find({category:req.body.category}).toArray((err, result) => {
        console.log(req.body);
        if (!err) {
            console.log("in index.js 117 nwlist no error");
            res.send({ status: 'ok', data: result });
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

app.post('/Addproduct',(req, res)=> {
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
     var sizeArray= req.body.Fruit;
     console.log(JSON.parse(req.body.Fruit));
      productcollection.insert({logo:req.files.logo[0].filename,productid:req.body.id,producttitle:req.body.title,price:req.body.price,pd:req.body.pd,selected:sizeArray,vendorEmail:req.body.vendorEmail,category:req.body.category,subcat:req.body.subcat},(err, result) => {
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
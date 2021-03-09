#!/usr/bin/node
//const MongoClient = require('mongodb').MongoClient;


const mongoose = require('mongoose');
const url = 'mongodb://127.0.0.1:27017';

var mongoDB = 'mongodb://127.0.0.1/prueba';
mongoose.connect(mongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  });
const connection = mongoose.connection;
connection.once("open", function() {
    console.log("MongoDB database connection established successfully");
});


module.exports = { connection };





/*
mongoose.Promise = global.Promise;

connection.on('error', console.error.bind(console, 'MongoDB connection error:'));





MongoClient.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err, client) => {

    if (err) {
        return console.log(err);
    }

    // Specify database you want to access
    const db = client.db('prueba');
    const courses = db.collection('usuarios');
    courses.insertMany([
        { 'name': 'Santiago' },
        { name: 'Distributed Database' },
        { name: 'Artificial Intelligence' }
    ], (err, results) => {
    
    });

    console.log(`MongoDB Connected: ${url}`);
});

module.exports = { MongoClient };
*/

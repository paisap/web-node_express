 
const bodyParser = require('body-parser');
const express = require('express');
const routes = require('./routes/v1')
const app = express();
const db = require('./database/conection');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/', routes);



app.listen(3000,()=>{
        console.log('Conecting ...');
});

module.exports = app

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var indexRouter = require('./routes/index');

mongoose.connect('mongodb://localhost/Rest_Api')
    .then(function(){
        console.log('Connexion Reussi à la base de donnée');
    })
    .catch(function(err){
        console.log(err);
    });

var app = express();

app.set("json spaces", 4);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

module.exports = app;

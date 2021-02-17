var express = require('express');
var bodyParser = require('body-parser');
var app=express();
var mainpageRoute = require('./routes/mainpage')
var episodepageRoute = require('./routes/episodepage')
var animepageRoute = require('./routes/animepage')
var animelistRoute = require('./routes/animelist')
const api = require('gogoanime')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('view engine','ejs')
app.use(express.static(__dirname + '/Public'));
// ROUTING
app.use('/',mainpageRoute)
app.use('/episodepage',episodepageRoute)
app.use('/animepage',animepageRoute)
app.use('/animelist', animelistRoute)
// INITIATING PORT REQ
app.listen(process.env.PORT || 3000)
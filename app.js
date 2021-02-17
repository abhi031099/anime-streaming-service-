var express = require('express');
var mongoose = require('mongoose')
var bodyParser = require('body-parser');
const path=require("path");
var app=express();
var AnimeInfo = require('./model/anime');
var videopageRoute = require('./routes/vidpage')
var mainpageRoute = require('./routes/mainpage')
var episodepageRoute = require('./routes/episodepage')
var animepageRoute = require('./routes/animepage')
var animelistRoute = require('./routes/animelist')
var urlencodedParser = bodyParser.urlencoded({ extended: false })
const api = require('gogoanime')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('view engine','ejs')
app.use(express.static(__dirname + '/Public'));

//connecting to the database
mongoose.connect('mongodb+srv://abhishek_sharma:testwebsite@initiald.jigbi.mongodb.net/anime_info?retryWrites=true&w=majority',
{useNewUrlParser: true,useUnifiedTopology:true})
mongoose.connection.once('open', function(){
    console.log("connected to the database")
}).on('error', function(error){
    comsole.log('error faced:', error)
}) 
app.use('/',mainpageRoute)
app.use('/movie',videopageRoute)
app.use('/episodepage',episodepageRoute)
app.use('/animepage',animepageRoute)
app.use('/animelist', animelistRoute)

/*
api.popular(1).then(function(result){
    const lol = result
    console.log(lol)
})  
api.search('my hero').then(function(result){
    console.log(result[0].episodes[0].id)
}) 
api.search().then(function(result){
    console.log(result)
}) 


app.listen("3000", function(req,res){
    console.log("server running bois")
}) 
*/
app.listen(process.env.PORT || 3000)
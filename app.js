var express = require('express');
var mongoose = require('mongoose')
var bodyParser = require('body-parser');
const path=require("path");
var app=express();
var AnimeInfo = require('./model/anime');
var videopageRoute = require('./routes/vidpage')
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
app.get('/', function(req,res){
    res.render('index')
})
app.use('/movie',urlencodedParser,videopageRoute)
api.search('initial d legend ').then(function(result){
    const lol = result
    console.log(lol)
})


app.listen("3000", function(req,res){
    console.log("server running bois")
})
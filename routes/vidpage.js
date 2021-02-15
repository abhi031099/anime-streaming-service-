const express=require('express');
const router =express.Router();
const AnimeInfo = require('../model/anime')
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })

router.get('/:name',urlencodedParser,function(req,res){
    AnimeInfo.getoneAnime(req.params.name,function(err, result){
        if(err){
            res.status(400).send('Anime not found!');
            console.log(err)
        }else{
           // res.send(result);
            res.render('videopage',{data:result} )
            console.log(result)
        }
    })
})

module.exports = router;
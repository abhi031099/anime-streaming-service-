
const express=require('express');
const router =express.Router();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
const api = require('gogoanime')
router.get('/', urlencodedParser,function(req, res){
    api.popular(2).then(function(result){
      //  console.log(result)
        res.render('index', {data:result})
    })

})
module.exports=router;
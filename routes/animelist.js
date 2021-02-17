const express=require('express');
const router =express.Router();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
const api = require('gogoanime')

router.get('/0', urlencodedParser,function(req, res){
    api.alphabetList(0,1).then(function(result){
        res.render('animelist',{data:result})

    })

})
router.get('/:alphabet', urlencodedParser,function(req, res){
    var alpha = req.params.alphabet
    api.alphabetList(alpha,1).then(function(result){
        res.render('animelist',{data:result})

    })

})
router.get('/:alphabet/:pageno', urlencodedParser,function(req, res){
    var alpha = req.params.alphabet
    var no = req.params.pageno
    console.log(no)
    api.alphabetList(alpha,no).then(function(result){
        res.render('animelist',{data:result})

    })

})
module.exports=router;
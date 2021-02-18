const express=require('express');
const router =express.Router();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
const api = require('gogoanime')
router.get('/:title', urlencodedParser,function(req, res){
   var titlee= req.params.title
var editedLink = titlee.slice(0, -1) 
  //  console.log(editedLink)
   api.animeEpisodeHandler(titlee).then(function(result){
      // console.log(result)
       res.render('episodepage', {data:result, links:editedLink})
   })

})
module.exports=router;
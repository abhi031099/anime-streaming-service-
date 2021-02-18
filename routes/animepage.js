const express = require('express');
const router = express.Router();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({
    extended: false
})
const api = require('gogoanime')
router.get('/:title', urlencodedParser, function (req, res,next) {
    var titlee = req.params.title
    api.search(titlee).then(function (result) {
            res.render('animepage', {
                data: result
            })
    }).catch(err)
})
module.exports = router;
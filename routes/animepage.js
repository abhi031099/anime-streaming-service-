const express = require('express');
const router = express.Router();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({
    extended: false
})
const api = require('gogoanime')
router.get('/:title', urlencodedParser, function (req, res) {
    var titlee = req.params.title
    api.search(titlee).then(function (result) {
        console.log(result[0].episodes[0].id)
        res.render('animepage', {
            data: result
        })
    })
})
module.exports = router;
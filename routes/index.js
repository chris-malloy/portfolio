const express = require('express');
const router = express.Router();
const mainTitle = "Chris Malloy";

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { 
        title: mainTitle 
    });
});

/* GET temporary page */
router.get('/temporary', function(req, res, next) {
    res.render('temporary', { 
        title: mainTitle 
    })
});


module.exports = router;
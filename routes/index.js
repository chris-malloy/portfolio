const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const creds = require('../config/config')
const mainTitle = "Chris Malloy";

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { 
        title: mainTitle 
    });
});

/* GET contact page */
router.get('/contact', function(req,res,next){
    res.render('contact',{
        title: mainTitle
    })
})

/* GET temporary page */
router.get('/temporary', function(req, res, next) {
    res.render('temporary', { 
        title: mainTitle 
    })
});

var transport = {
    host: 'smtp.gmail.com',
    auth: {
        user: creds.USER,
        pass: creds.PASS,
    }
};

// make transporter
var transporter = nodemailer.createTransport(transport);

// pass verify method against transporter
transporter.verify((error, success) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Server is ready to take messages.');
    };
});

/* POST send page */
router.post('/send', (req, res) => {
    var name = req.body.name;
    var email = req.body.email;
    var message = req.body.message;
    var finalMessage = `${message} \n\n name: ${name} \n email: ${email}`;
    console.log(name,email,message)
    // nodemailer object
    var mail = {
        from: 'Chris Malloy',
        to: 'chrismalloymusic@gmail.com',
        subject: 'test',
        text: finalMessage
    };

    transporter.sendMail(mail, (err, data) => {
        if (err) {
            console.log(err);
            res.redirect('/?msg=fail');
        } else {
            res.redirect('/?msg=email-sent');
        }
    });
});

module.exports = router;
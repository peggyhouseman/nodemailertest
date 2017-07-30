var express = require('express');
var nodemailer = require('nodemailer');

var app = express();

var smtpTransport = nodemailer.createTransport({
  
  service: "gmail",
  host: "smtp.gmail.com",
  auth: {
    user: "emailtest@gmail.com",
    pass: "pass"
  }
  
});


app.get('/', function(req, res){
  res.sendfile('./client/index.html');
});

app.get('/send', function(req, res){
  console.log('send');
  debugger;
  var mailOptions = {
    to : req.query.to,
    subject: req.query.subject,
    text: req.query.text
  };
  
  console.log(mailOptions);

  smtpTransport.sendMail(mailOptions, function(error, response){
    if (error) {
      console.log(error);
      res.end(error);
    } else {
      console.log("Message sent: " + response.message);
      res.end("sent");
    }
  });

});

app.listen(8080, function(){
  console.log('testing');
});

module.exports = app;
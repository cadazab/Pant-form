var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');
var mg = require('nodemailer-mailgun-transport');

// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static('public'));

app.get('/index.htm', function (req, res) {
   res.sendFile( __dirname + "/" + "index.htm" );
})

app.post('/process_post', urlencodedParser, function (req, res) {

   // Prepare output in JSON format
    response = req.body.first_name;
    marke = req.body.marke;
    modell = req.body.modell;
    baujahr = req.body.baujahr;
    kaufpreis = req.body.kaufpreis;
    werttrailer = req.body.werttrailer;
    versicherungssumme = req.body.versicherungssumme;
    schiffstyp = req.body.schiffstyp;
    motorleistung = req.body.motorleistung;
    wertab = req.body.wertab;
    anrede = req.body.anrede;
    nachname = req.body.nachname;
    vorname = req.body.vorname;
    geburtsdatum = req.body.vorname;
    telefon = req.body.telefon;
    postleitzahl = req.body.postleitzahl;
    strasse = req.body.postleitzahl;
    stadt = req.body.stadt;
    email = req.body.email;
    
    
    var auth = {
  auth: {
    api_key: 'key-4fa9e7864b60b7f33e150c0b353a4420',
    domain: 'sandboxfd6a9142c3a34c8b8c7cc0ea233ff4c3.mailgun.org'
  }
}

var nodemailerMailgun = nodemailer.createTransport(mg(auth));
    

	   nodemailerMailgun.sendMail({
	      from: 'postmaster@mg.pantaenius.com',
	      to: 'cdaza@pantaenius.com',
	      subject: 'Mail using heroku',
	      text: 'This mail is send using nodemailer on heroku.',
	      html: '<p>This mail is send using <b>nodemailer</b> on <b>heroku</b></p>'
	  }, function(err, response){
			
			 if(err){
        return console.log(err);
    }
    console.log('Message sent');
	  });
    
   
})


var server = app.listen(8080, function () {

  var host = process.env.IP
  var port = process.env.PORT

  console.log("Example app listening at http://%s:%s", host, port)

})
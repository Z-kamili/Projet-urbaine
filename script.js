/*server local*/
var express = require("express"),
fs = require('fs'),
app = express(),
bodyParser = require('body-parser'),
personne = "",
http = require("http").Server(app).listen(8000);
var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use("/css",express.static("./css"))
app.use("/Traitement",express.static("./Traitement"))
app.use("/img",express.static("./img"))
app.get("/questionnement.html",function(req,res){ 
fs.readFile('Traitement/JSON/service.json', function(erreur, fichier) {
    personne = JSON.parse(fichier);
});
    res.sendFile(__dirname+"/questionnement.html");
})
app.get("/Reclamation.html",function(req,res){

    res.sendFile(__dirname+"/Reclamation.html");
});
app.post("/questionnement.html",urlencodedParser,function(req,res){
  console.log(req.body.service);
  res.end("/questionnement.html");
});


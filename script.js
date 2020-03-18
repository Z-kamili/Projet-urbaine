/*server local*/
var express = require("express"),
fs = require('fs'),
app = express(),
personne = "",
http = require("http").Server(app).listen(80);
app.use("/css",express.static("./css"))
app.use("/Traitement",express.static("./Traitement"))
app.use("/img",express.static("./img"))
app.get("/questionnement.html",function(req,res){ 
fs.readFile('JSON/service.json', function(erreur, fichier) {
    personne = JSON.parse(fichier);
    console.log(personne);
});
    res.sendFile(__dirname+"/questionnement.html");
})
app.get("/Reclamation.html",function(req,res){

    res.sendFile(__dirname+"/Reclamation.html");
});

exports.dataJSON = function(){
    return personne;
    }
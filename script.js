/*server local*/
var express = require("express"),
fs = require('fs'),
app = express(),
bodyParser = require('body-parser'),
client = "",
Dataquestion = fs.readFileSync('Traitement/JSON/Question.json'),
Question = JSON.parse(Dataquestion);
http = require("http").Server(app).listen(8000);
var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use("/css",express.static("./css"))
app.use("/Traitement",express.static("./Traitement"))
app.use("/img",express.static("./img"))
app.get("/questionnement.html",function(req,res){ 
    res.sendFile(__dirname+"/questionnement.html");
})
app.get("/Reclamation.html",function(req,res){

    res.sendFile(__dirname+"/Reclamation.html");
});
app.post("/questionnement.html",urlencodedParser,function(req,res){  
    SaveData(req.body.CIN,req.body.Date,req.body.Description,req.body.service);

res.sendFile(__dirname+"/questionnement.html");
});



function SaveData(cin,date_question,description,id_service){

    var id;
    if(Question[Question.length - 1].ID != null){
      id  = Question[Question.length].ID + 1;
    }else{
        id = 1;
    }
    let data = 
        { 
            ID: id,
            CIN: cin, 
            datequestion : date_question,
            description: description,
            Nom_service: id_service 
        };
        Question.push(data);

    let question = JSON.stringify(Question);

    fs.writeFileSync('Traitement/JSON/Question.json',question);
}



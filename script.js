const path = require('path');
const Joi = require('joi');
const express = require("express");
const hbs = require('hbs');
const app = express();
const partialsPath = path.join(__dirname, './partials');
var bodyParser = require('body-parser'),
client = "";
path_jsonfile = 'public/Traitement/JSON/Question.json',
LoadData = require('./Modale/Readandwrite');
var data = LoadData.LoadJson('public/Traitement/JSON/service.json');
var wd = LoadData.LoadJson('public/Traitement/JSON/service.json');
urlencodedParser = bodyParser.urlencoded({ extended: false });
// *Define paths for express config
const viewPath = path.join(__dirname, './views');
// *setup handlebars engine and views location
app.set('view engine','ejs');
app.set('view engine', 'hbs');
// app.set('view engine', 'html');
// app.engine('html', require('hbs').__express);
// app.set('view engine', 'hbs');
// Pointing express to my custom directory
app.set('views', viewPath);
hbs.registerPartials(partialsPath);
// registerPartials take the path to the direcotory where my partials leaves
app.use("/public/css",express.static("./public/css"))
app.use("/public/Traitement",express.static("./public/Traitement"))
app.use("/public/img",express.static("./public/img"))
// Lancement des pages.
app.get("/questionnement.hbs", (req, res) => {
  res.render('questionnement',{data});
});
app.get("/Reclamation.hbs", (req, res)=> {
    res.render('Reclamation',{data});
});
app.get("/home.hbs",(req,res)=>{
    res.render('home');
});
app.get("/inscription.html",function(req,res){
    res.sendFile(__dirname+"/views/inscription.html");
});
app.get("/contact.html",function(req,res){
    res.sendFile(__dirname+"/views/contact.html");
});
// Port
var port = process.env.PORT || 8000;
app.listen(port,() => console.log(`Listening on port ${port}...`));
/*server local*/
// /*Use Post data*/
app.post("/questionnement.hbs",urlencodedParser,function(req,res){  
    var date_question = new Date();
    var date = date_question.getDate() + "/" + (date_question.getMonth() + 1) + "/" + date_question.getFullYear(); 
    
    SaveData(req.body.CIN,date,req.body.Description,req.body.service);
    res.render('questionnement',{data});
});
//button recherche
app.post("/Reclamation.hbs",urlencodedParser,function(req,res){  
var Question = LoadData.LoadJson(path_jsonfile);
var data2 = [{ID:null,CIN:null,datequestion:null,description:null,Nom_service:null}];
var j = 0;
for(var i = 0;i<Question.length;i++){
  if(req.body.service == Question[i].Nom_service){
    data2[j] = Question[i];
j++;
}
}
res.render('Reclamation.hbs',{data2,data});
});
// /*Save Data in json file */
function SaveData(cin,date_question,description,id_service){

    var id;
    Question = LoadData.LoadJson(path_jsonfile);
    if(Question[Question.length - 1].ID != null){
      id  = Question[Question.length - 1].ID + 1;
    }else{
        id = 1;
    }
    var data = 
        { 
            ID: id,
            CIN: cin, 
            datequestion : date_question,
            description: description,
            Nom_service: id_service 
        };
        Question.push(data);

    var question = JSON.stringify(Question);
    LoadData.SaveJson(path_jsonfile,question);
    
}
/*larouze*/
app.get('/entreprise',(req,resp)=>{
    resp.render('Page1.ejs',{entreprise:wd});
});
app.post('/dep',function(req,resp){
    console.log(req.body);
});
// Ajouter Département  //
app.post('/d',(req,resp)=>{
    console.log(req.body.entreprise);
for(var i in list){
    if(list[i].nom===req.body.entreprise){
    list[i].Département.push({"id":list.length +1,"chef_département":req.body.chef_département,"description":req.body.description});
}
}
fs.writeFile('./data/Entreprise.json',JSON.stringify(list),(err)=>{
    console.log(err);
});
resp.render('pages/Page1',{entreprise:list});
});

// Ajouter Entreprise  //
app.post('/entre',urlencodedParser,(req,resp)=>{
    var services = LoadData.LoadJson('./public/Traitement/JSON/service.json');
    let service = {
        ID: services[services.length - 1].ID + 1,
        Nom_service: req.body.Nom_service,
        Description: req.body.description,
    }
    services.push(service);
    console.log(services);
    LoadData.SaveJson('./public/Traitement/JSON/service.json',JSON.stringify(services));
    resp.render('Page1.ejs',{entreprise:wd});
});




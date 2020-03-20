//variable
var select = document.getElementById("select");
var url = "http://localhost:8000/Traitement/JSON/service.json";
var request = new XMLHttpRequest();
//Traitement animation
$('.contact').click(()=>{
$('.contact').addClass("active");
$('.question').removeClass("active");
    $('html').animate({
        scrollTop: $(".Contact").offset().top
       
        
    },'slow');


});
$(".question").click(()=>{
$('.contact').removeClass("active");
$('.question').addClass("active");
    $('html').animate({
        scrollTop: $(".Question").offset().top
        
    },'slow');
});
var data_service = "";
//Load data to object javascript using AJAX
window.onload = function() {
    request.open("GET", url);
    request.onload = function() {
        if (request.status == 200) {
            data_service = JSON.parse(request.responseText);
            RemplirSelect(data_service);
        }
    };
    request.send(null);

}

//remplir select box using javascript 
function RemplirSelect(data){

    for(var  i = 0;i<data.length;i++){
        var option = document.createElement("option");
        option.innerText = data[i].Nom_service;
        select.appendChild(option);
    }
}









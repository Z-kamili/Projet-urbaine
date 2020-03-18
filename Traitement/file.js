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
/*traitement sur fichier json*/
// const fs = require('fs');
// var xmlhttp = new XMLHttpRequest();
// xmlhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//         var myObj = JSON.parse(this.responseText);
       
//     }
// };
// xmlhttp.open("GET", "../JSON/service.json", true);
// xmlhttp.send();


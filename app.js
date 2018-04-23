
/*
var a = $('.topBar').offset().top;

$(document).scroll(function(){
    if($(this).scrollTop() > a)
    {   
    $('.topBar').css({"background":"red"});
    } else {
    $('.topBar').css({"background":"transparent"});
    }
});

*/

function yScroll(){

    var topbar = document.getElementById("topBar");
    var topbarmiddle = document.getElementById("topBarMiddle");
    
    var yPos = window.pageYOffset;
    if(yPos > 50){
        topbar.style.backgroundColor = "#2e2e2e";
       // topbarmiddle.style.borderBottom = "0";
   
    } else {
        topbar.style.backgroundColor = "transparent";
        
        //topbarmiddle.style.borderBottom= "1px solid #2e2e2e";

    }
}
window.addEventListener("scroll", yScroll);
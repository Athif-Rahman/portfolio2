$(document).ready (function(){
$('.slider').slick({
    arrows:false,
    dots:true,
    appendDots:'.slider-dots',
    dotsclass:'dots',
});





let hamberger = document.querySelector('.hamberger');
let mobilenav = document.querySelector('.mobile-nav');
let times = document.querySelector('.times');



hamberger.addEventListener('click',function(){
mobilenav.classList.add('open');
})

times.addEventListener('click',function(){
    mobilenav.classList.remove('open');
    })
});








function sendwhatsapp(){
    var phonenumber ="8248056528"

    var name = document.querySelector('.name').value;
    var email = document.querySelector('.email').value;
    var subject = document.querySelector('.subject').value;
    var message = document.querySelector('.message').value;

    var url = "https://wa.me/"+ phonenumber + "?text="
    +"*Name :*" +name+"%0a"
    +"*Email :*" +email+"%0a"
    +"*Subject :*" +subject+"%0a"
    +"*Message :*" +message+"%0a%a"

    +"this is example of send html form data to whatsapp";

    window.open(url,'_blank').focus();
}



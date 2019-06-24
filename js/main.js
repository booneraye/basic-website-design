//Alert Mesages
var close = document.getElementsByClassName("closebtn");
var a;

for (a = 0; a < close.length; a++) {
  close[a].onclick = function(){
    var div = this.parentElement;
    div.style.opacity = "0";
    setTimeout(function(){ div.style.display = "none"; }, 600);
  }
}

//collapsible
var coll = document.getElementsByClassName("collapsible");
var b;

for (b = 0; b < coll.length; b++) {
  coll[b].addEventListener("click", function() {
    this.classList.toggle("collapsible-active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}


// Tyewriter Effect
var c = 0;
var txt = 'COMING BACK SOON!';
var speed = 100;

function typeWriter() {
  if (c < txt.length) {
    document.getElementById("typewriter-effect").innerHTML += txt.charAt(c);
    c++;
    setTimeout(typeWriter, speed);
  }
}

//Slideshow effects
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(d) {
  showSlides(slideIndex += d);
}

function currentSlide(d) {
  showSlides(slideIndex = d);
}

function showSlides(d) {
  var e;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (d > slides.length) {slideIndex = 1}    
  if (d < 1) {slideIndex = slides.length}
  for (e = 0; e < slides.length; e++) {
      slides[e].style.display = "none";  
  }
  for (e = 0; e < dots.length; e++) {
      dots[e].className = dots[e].className.replace(" slideshow-active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " slideshow-active";
}
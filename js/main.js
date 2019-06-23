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
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

var mybutton = document.getElementById("myBtn");

function slideshow() {
	var x = document.getElementById('checkclass');
	if (x.style.display === "none") {
		x.style.display = "block";
	}else{
		x.style.display = "none";
	}
}


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
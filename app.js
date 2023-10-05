/*----nav toggle----*/
function nav() {
	var menu = document.getElementById("nav-menu");
	menu.classList.toggle("nav_menu_active"); 
}

function popup(){
	var pop = document.getElementById("popup");
	pop.classList.toggle("popup-active");
	popCard = document.getElementById("popup-card");
	popCard.classList.toggle("popup-card-active");
}

document.addEventListener("scroll", ()=>{
    if (window.scrollY >= 100) {
    	var headerShadow = document.getElementById("header");
		headerShadow.classList.add("header-shadow-black");
		headerShadow.classList.remove("header-shadow-white");
    }
    else {
    	var headerShadow = document.getElementById("header");
    	headerShadow.classList.remove("header-shadow-black");
		headerShadow.classList.add("header-shadow-white");
    }
});


function GoTop() {
	window.scrollTo({ top: 0, behavior: 'smooth' });
}

/*---theme---*/
function theme() {
	document.body.classList.toggle("dark-theme")
}

/*----tree-----*/
var toggler = document.getElementsByClassName("caret");
var i;

for (i = 0; i < toggler.length; i++) {
  toggler[i].addEventListener("click", function() {
    this.parentElement.querySelector(".nested").classList.toggle("tree-active");
    this.classList.toggle("caret-down");
  });
}
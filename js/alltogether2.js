var slideIndex = 1;
var Index = 1;
var x = 1;
var y = 1;
var mapPopUp = document.querySelector(".pop-up-map");
var mapLink = document.getElementById("map-link");
var formPopUp = document.querySelector(".request-pop-up");
var formLink = document.getElementById("request-link");
var cartPopUp = document.querySelector(".cart-pop-up");
var buyLink = document.querySelectorAll(".buy");
var greenZone = document.getElementById("green-zone");
var paginator = document.querySelector(".paginator");
var indexSlider = document.querySelector(".index-slider");
var services = document.querySelector(".services")
var sorter = document.querySelector(".filters-sorter-list")

//MODALS
// Call map modal
if (mapPopUp) {
	mapLink.addEventListener("click", function(evt) {
	evt.preventDefault();
	mapPopUp.classList.add("modal-show");
	});
}
// Close map modal
if (mapPopUp) {
	var closeMapModal = mapPopUp.querySelector(".modal-close");
	closeMapModal.addEventListener("click", function(evt) {
	evt.preventDefault();
	mapPopUp.classList.remove("modal-show");
	});
}
// Call form modal
if (formPopUp) {
	formLink.addEventListener("click", function(evt) {
	evt.preventDefault();
	formPopUp.classList.add("modal-show");
	});
}
// Close form modal
if (formPopUp) {
	var closeFormModal = formPopUp.querySelector(".modal-close");
	closeFormModal.addEventListener("click", function(evt) {
	evt.preventDefault();
	formPopUp.classList.remove("modal-show");
	});
}
//Call cart modal
if (cartPopUp) {
	for (var t=0; t<buyLink.length; t++) {
		buyLink[t].addEventListener("click", function(evt) {
		evt.preventDefault();
		cartPopUp.classList.add("modal-show");
		});
	}
}
//Close cart modal
if (cartPopUp) {
	var closeModal = cartPopUp.querySelector(".modal-close");
	closeModal.addEventListener("click", function(evt) {
	evt.preventDefault();
	cartPopUp.classList.remove("modal-show");
	});
}


//BY-UPLOAD FUNCTIONS
//Defines green zone for price-filter price-range-input
if (greenZone) {
defineGreenZone();
} 
//Paginator
if (paginator) {
choosePage(y);
}
// Index-slider
if (indexSlider) {
showSlides(slideIndex);
}
// services-slider
if (services) {
showService(Index);
}
//Filter-sorters
if (sorter) {
chooseFilter(x);
}


//ONCLICK FUNCTIONS 
 // Next control for paginator
function movePage(n) {
	choosePage(y+=n);
}
// Next/previous controls for index-slider
function plusSlides(n) {
  showSlides(slideIndex += n);
}
// Thumbnail  controls for index-slider
function currentSlide(n) {
  showSlides(slideIndex = n);
}
// Next/previous controls for filter-sorters
function moveFilter(n) {
	chooseFilter(x += n);
}
// Thumbnail  controls for services-slider
function currentService(n) {
  showService(Index = n);
}

//MAIN-FUNCTIONS
//green zone function
function defineGreenZone() {
	var max = document.getElementById("filter-price_range-input").value;
	var width = 160*(max/35000) -20;
	greenZone.style.width = width +"px";
 }
// Page buttons main function
function choosePage(n) {
	var i;
	var paginator = document.querySelector(".paginator");
	var pages = paginator.children;
	for (i=0; i<pages.length; i++) {
		pages[i].classList.remove("current");}
	y = n;
	if (n >= pages.length) {y=1;}
	pages[y-1].classList.add("current");
 }
// Index-slider main function
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("index-slide");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1;} 
  if (n < 1) {slideIndex = slides.length;}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i=0; i < dots.length; i++) {
	  dots[i].classList.remove("active");
  }
   slides[slideIndex-1].style.display = "block";
   dots[slideIndex-1].classList.add("active");
 }
//services-slider main function
function showService(n) {
  var i;
  var slides = document.getElementsByClassName("services-description-article");
  var names = document.getElementsByClassName("services-list-item");
  if (n > slides.length) {Index = 1;}
  if (n < 1) {Index = slides.length;}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < names.length; i++) {
    names[i].classList.remove("current");
  }
  slides[Index-1].style.display = "block";
  names[Index-1].className += " current";
}
// Filter-sorter main function
function chooseFilter(n) {
	var i;
	var filters = document.getElementsByClassName("filters-sorter");
	for (i = 0; i < filters.length; i++) {
		filters[i].classList.remove("current");
	}
	x=n;
	if (n > filters.length) {x = 1;} 
	if (n < 1) {x = filters.length;}
	 filters[x-1].classList.add("current");
 } 
// Sorter-buttons function
 function addActive(k) {
	var sorterButtons = document.getElementsByClassName("filters-sorter-button");
	var z;
	for (z=0; z < sorterButtons.length; z++) {
		sorterButtons[z].classList.remove("active");}
	sorterButtons[k-1].classList.add("active");
 }






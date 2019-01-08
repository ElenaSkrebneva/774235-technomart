// Index-slider
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls for index-slider
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail  controls for index-slider
function currentSlide(n) {
  showSlides(slideIndex = n);
}
// Index-slider main function
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("index-slide");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i=0; i < dots.length; i++) {
	  dots[i].classList.remove("active");
  }
   slides[slideIndex-1].style.display = "block";
   dots[slideIndex-1].classList.add("active");
 }

// services-slider
var Index = 1;
showService(Index);

// Thumbnail  controls for services-slider
function currentService(n) {
  showService(Index = n);
}

//services-slider main function
function showService(n) {
  var i;
  var slides = document.getElementsByClassName("services-description-article");
  var names = document.getElementsByClassName("services-list-item");
  if (n > slides.length) {Index = 1}
  if (n < 1) {Index = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < names.length; i++) {
    names[i].classList.remove("current");
  }
  slides[Index-1].style.display = "block";
  names[Index-1].className += " current";
}

// Map modal function
var mapPopUp = document.querySelector(".pop-up-map");
var mapLink = document.getElementById("map-link");
var closeMapModal = mapPopUp.querySelector(".modal-close");
// Call map modal
mapLink.addEventListener("click", function(evt) {
	evt.preventDefault();
	mapPopUp.classList.add("modal-show");
 });
// Close map modal
 closeMapModal.addEventListener("click", function(evt) {
	evt.preventDefault();
	mapPopUp.classList.remove("modal-show");
 });
 
// Form modal function
var formPopUp = document.querySelector(".request-pop-up");
var formLink = document.getElementById("request-link");
var closeFormModal = formPopUp.querySelector(".modal-close");
// Call form modal
formLink.addEventListener("click", function(evt) {
	evt.preventDefault();
	formPopUp.classList.add("modal-show");
 });
// Close form modal
 closeFormModal.addEventListener("click", function(evt) {
	evt.preventDefault();
	formPopUp.classList.remove("modal-show");
 });
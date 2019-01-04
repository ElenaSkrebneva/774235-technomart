// Index-slider
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls for index-slider
function plusSlides(n) {
  showSlides(slideIndex += n);
}
// services-slider
var Index = 1;
showService(Index);

// Thumbnail  controls for services-slider
function currentSlide(n) {
  showService(Index = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("index-slide");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
   slides[slideIndex-1].style.display = "block";
 }

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

<!-- map-pop-up function -->
var mapPopUp = document.querySelector(".pop-up-map");
var mapLink = document.getElementById("map-link");
var closeMapModal = mapPopUp.querySelector(".modal-close");

mapLink.addEventListener("click", function(evt) {
	evt.preventDefault();
	mapPopUp.classList.add("modal-show");
 });
 
 closeMapModal.addEventListener("click", function(evt) {
	evt.preventDefault();
	mapPopUp.classList.remove("modal-show");
 });
 
<!-- form-pop-up function -->
var formPopUp = document.querySelector(".request-pop-up");
var formLink = document.getElementById("request-link");
var closeFormModal = formPopUp.querySelector(".modal-close");

formLink.addEventListener("click", function(evt) {
	evt.preventDefault();
	formPopUp.classList.add("modal-show");
 });
 
 closeFormModal.addEventListener("click", function(evt) {
	evt.preventDefault();
	formPopUp.classList.remove("modal-show");
 });
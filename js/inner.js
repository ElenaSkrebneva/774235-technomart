//Filter-sorters
var x = 1;
chooseFilter(x);
 
// Next/previous controls for filter-sorters
function moveFilter(n) {
	chooseFilter(x += n);
}
// Filter-sorter function
function chooseFilter(n) {
	var i;
	var filters = document.getElementsByClassName("filters-sorter");
	for (i = 0; i < filters.length; i++) {
		filters[i].classList.remove("current");
	}
	x=n;
	if (n > filters.length) {x = 1} 
	if (n < 1) {x = filters.length}
	 filters[x-1].classList.add("current");
 }
 
//Paginator
var y=1;
choosePage(y);

// Next control for paginator
function movePage(n) {
	choosePage(y+=n);
}

// Page buttons current-class toggle for paginator
function choosePage(n) {
	var i;
	var paginator = document.querySelector(".paginator");
	var pages = paginator.children;
	for (i=0; i<pages.length; i++) {
		pages[i].classList.remove("current");}
	y = n;
	if (n >= pages.length) {y=1}
	pages[y-1].classList.add("current");
 }
 
 //Defines green zone for price-filter price-range-input
defineGreenZone();
function defineGreenZone() {
	var greenZone = document.getElementById("green-zone");
	var max = document.getElementById("filter-price_range-input").value;
	var width = 160*(max/35000) -20;
	greenZone.style.width = width +"px";
 }
 
// Sorter-buttons 
 function addActive(k) {
	var sorterButtons = document.getElementsByClassName("filters-sorter-button");
	var z;
	for (z=0; z < sorterButtons.length; z++) {
		sorterButtons[z].classList.remove("active");}
	sorterButtons[k-1].classList.add("active");
 }
 
// Cart modal
var cartPopUp = document.querySelector(".cart-pop-up");
var buyLink = document.querySelectorAll(".buy");
//Cart modal call
for (var t=0; t<buyLink.length; t++) {
	buyLink[t].addEventListener("click", function(evt) {
	evt.preventDefault();
	cartPopUp.classList.add("modal-show");
	});
 }
//Close cart modal
var closeModal = cartPopUp.querySelector(".modal-close");
closeModal.addEventListener("click", function(evt) {
	evt.preventDefault();
	cartPopUp.classList.remove("modal-show");
});
 
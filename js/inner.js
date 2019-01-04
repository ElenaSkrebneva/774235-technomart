var x = 1;
var y=1;
var cartPopUp = document.querySelector(".cart-pop-up");
var buyLink = document.querySelectorAll(".buy");
var closeModal = cartPopUp.querySelector(".modal-close");
 chooseFilter(x);
 choosePage(y);
 defineGreenZone();
 
// Next/previous controls for filter-sorters
function moveFilter(n) {
  chooseFilter(x += n);
}
<!-- filter sorter fucntion -->
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
 
 function movePage(n) {
	choosePage(y+=n);
 }
 
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
 
 function defineGreenZone() {
	var greenZone = document.getElementById("green-zone");
	var max = document.getElementById("filter-price_range-input").value;
	var width = 160*(max/35000) -20;
	greenZone.style.width = width +"px";
 }
 <!-- sorter-buttons active class toggle -->
 function addActive(k) {
	var sorterButtons = document.getElementsByClassName("filters-sorter-button");
	var z;
	for (z=0; z < sorterButtons.length; z++) {
		sorterButtons[z].classList.remove("active");}
	sorterButtons[k-1].classList.add("active");
 }
 
 for (var t=0; t<buyLink.length; t++) {
 buyLink[t].addEventListener("click", function(evt) {
	evt.preventDefault();
	cartPopUp.classList.add("modal-show");
 });
 }
 closeModal.addEventListener("click", function(evt) {
	evt.preventDefault();
	cartPopUp.classList.remove("modal-show");
 });
 
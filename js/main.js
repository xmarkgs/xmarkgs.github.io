// JS
var leftblock = document.getElementById("leftblock");
var button = document.getElementById("yes");
var button_nope = document.getElementById("nope");
var textvalue = document.getElementById("myInput");
function changer() {
	leftblock.style.left = "0";
	textvalue.value = "I knew it";
	button.style.display = "none";
	button_nope.style.display = "none";
};
function runaway(){
	document.getElementById('nope_cover').classList.toggle('runaway');
};
// JS
var mainwarpus = document.getElementById("warpus")
var leftblock = document.getElementById("leftblock");
var button = document.getElementById("yes");
var button_nope = document.getElementById("nope");
var textvalue = document.getElementById("myInput");
var tryagain = document.getElementById("tryagain");
var gayvideo = document.getElementById("gayvideo");
var buttonvideocontainer = document.getElementById("buttonvideocontainer");
function changer() {
	leftblock.style.left = "0";
	textvalue.value = "I knew it";
	button.style.display = "none";
	button_nope.style.display = "none";
	tryagain.style.display = "block";
	document.getElementById("buttonscontainer").style.justifyContent = "center"
};
function runaway(){
	document.getElementById('nope_cover').classList.toggle('runaway');
};
function gayquest(){
	gayvideo.style.display = "block";
	gayvideo.play();
	leftblock.style.display = "none";
	mainwarpus.style.display = "none";
	tryagain.style.display = "none";
	buttonvideocontainer.style.display = "flex";
	buttonvideocontainer.style.justifyContent = "space-between";
};
function closevideo(){
	gayvideo.style.display = "none";
	gayvideo.pause();
	leftblock.style.display = "block";
	leftblock.style.left = "-200%";
	mainwarpus.style.display = "block";
	buttonvideocontainer.style.display = "none";
	button.style.display = "block";
	button_nope.style.display = "block";
	textvalue.value = "U gay?"
	document.getElementById('nope_cover').classList.toggle('runaway');
	document.getElementById("buttonscontainer").style.justifyContent = "space-around";
}
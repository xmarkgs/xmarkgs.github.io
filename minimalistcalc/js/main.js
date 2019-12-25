// Calculator Javascript
var textview = document.getElementById('textview');

function clean(){
	textview.value = "";
	document.getElementById("divide").setAttribute("onclick", "divide()");
	document.getElementById("multiply").setAttribute("onclick", "multiply()")
	document.getElementById("plus").setAttribute("onclick", "plus()");
	document.getElementById("minus").setAttribute("onclick", "minus()");
	document.getElementById("point").setAttribute("onclick", "point()");
	document.getElementById("leftbracket").setAttribute("onclick", "leftbracket()");
};
function back(){
	var value = textview.value;
	textview.value = value.substring(0, value.length-1);
	document.getElementById("divide").setAttribute("onclick", "divide()");
	document.getElementById("multiply").setAttribute("onclick", "multiply()")
	document.getElementById("plus").setAttribute("onclick", "plus()");
	document.getElementById("minus").setAttribute("onclick", "minus()");
	document.getElementById("point").setAttribute("onclick", "point()");
	document.getElementById("leftbracket").setAttribute("onclick", "leftbracket()");
};
function equal(){
	var valuenumber = textview.value;
	if(valuenumber){
		textview.value = Math.round(eval(valuenumber) * 10000000000000) / 10000000000000;
	};
	// if (0){
 // 		alert();
	// } else if (error !== textview.value) {
	// 	alert("Marko")
	// }
}
var error; 
// Має дорівнювати значенню інпута у всіх випадках крім неправильного

function insert(num){
	textview.value = textview.value+ num;
	document.getElementById("divide").setAttribute("onclick", "divide()");
	document.getElementById("multiply").setAttribute("onclick", "multiply()")
	document.getElementById("plus").setAttribute("onclick", "plus()");
	document.getElementById("minus").setAttribute("onclick", "minus()");
	document.getElementById("point").setAttribute("onclick", "point()");
	document.getElementById("leftbracket").setAttribute("onclick", "leftbracket()");
	document.getElementById("rightbracket").setAttribute("onclick", "rightbracket()");

};

function divide(){
	textview.value = textview.value+ "/";
	document.getElementById("divide").removeAttribute("onclick", "divide()");
	document.getElementById("minus").removeAttribute("onclick", "minus()");
	document.getElementById("point").removeAttribute("onclick", "point()");
	document.getElementById("multiply").removeAttribute("onclick", "multiply()");
	document.getElementById("plus").removeAttribute("onclick", "plus()");
	document.getElementById("rightbracket").removeAttribute("onclick", "rightbracket()");
};

function minus(){
	textview.value = textview.value+ "-";
	document.getElementById("minus").removeAttribute("onclick", "minus()");
	document.getElementById("point").removeAttribute("onclick", "point()");
	document.getElementById("multiply").removeAttribute("onclick", "multiply()");
	document.getElementById("plus").removeAttribute("onclick", "plus()");
	document.getElementById("divide").removeAttribute("onclick", "divide()");
	document.getElementById("rightbracket").removeAttribute("onclick", "rightbracket()");
};

function plus(){
	textview.value = textview.value+ "+";
	document.getElementById("plus").removeAttribute("onclick", "plus()");
	document.getElementById("point").removeAttribute("onclick", "point()");
	document.getElementById("multiply").removeAttribute("onclick", "multiply()");
	document.getElementById("minus").removeAttribute("onclick", "minus()");
	document.getElementById("divide").removeAttribute("onclick", "divide()");
	document.getElementById("rightbracket").removeAttribute("onclick", "rightbracket()");
};

function multiply(){
	textview.value = textview.value+ "*";
	document.getElementById("multiply").removeAttribute("onclick", "multiply()");
	document.getElementById("plus").removeAttribute("onclick", "plus()");
	document.getElementById("point").removeAttribute("onclick", "point()");
	document.getElementById("minus").removeAttribute("onclick", "minus()");
	document.getElementById("divide").removeAttribute("onclick", "divide()");
	document.getElementById("rightbracket").removeAttribute("onclick", "rightbracket()");
};

function point(){
	textview.value = textview.value+ ".";
	document.getElementById("point").removeAttribute("onclick", "point()");
	document.getElementById("multiply").removeAttribute("onclick", "multiply()");
	document.getElementById("plus").removeAttribute("onclick", "plus()");
	document.getElementById("minus").removeAttribute("onclick", "minus()");
	document.getElementById("divide").removeAttribute("onclick", "divide()");
	document.getElementById("leftbracket").removeAttribute("onclick", "leftbracket()");
	document.getElementById("rightbracket").removeAttribute("onclick", "rightbracket()");

}

function leftbracket(){
	textview.value = textview.value+ "(";
	document.getElementById("point").removeAttribute("onclick", "point()");
	document.getElementById("multiply").removeAttribute("onclick", "multiply()");
	document.getElementById("plus").removeAttribute("onclick", "plus()");
	document.getElementById("minus").removeAttribute("onclick", "minus()");
	document.getElementById("divide").removeAttribute("onclick", "divide()");
	document.getElementById("rightbracket").removeAttribute("onclick", "rightbracket()");
}
document.getElementById("rightbracket").removeAttribute("onclick", "rightbracket()");
function rightbracket(){
	textview.value = textview.value+ ")";
};
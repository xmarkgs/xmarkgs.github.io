// Calculator Javascript
var textview = document.getElementById('textview');

function clean(){
	textview.value = "";
};
function back(){
	var value = textview.value;
	textview.value = value.substring(0, value.length-1);
};
function equal(){
	var valuenumber = textview.value;
	if(valuenumber){
		textview.value = Math.round(eval(valuenumber) * 10000000000000) / 10000000000000;
		
	};

}
function insert(num){
	textview.value = textview.value+ num;
	document.getElementById("divide").setAttribute("onclick", "divide()");
	document.getElementById("multiply").setAttribute("onclick", "multiply()")
	document.getElementById("plus").setAttribute("onclick", "plus()");
	document.getElementById("minus").setAttribute("onclick", "minus()");
	document.getElementById("point").setAttribute("onclick", "point()");
};

function divide(){
	textview.value = textview.value+ "/";
	document.getElementById("divide").removeAttribute("onclick", "divide()");

};

function minus(){
	textview.value = textview.value+ "-";
	document.getElementById("minus").removeAttribute("onclick", "minus()");
};

function plus(){
	textview.value = textview.value+ "+";
	document.getElementById("plus").removeAttribute("onclick", "plus()");
};

function multiply(){
	textview.value = textview.value+ "*";
	document.getElementById("multiply").removeAttribute("onclick", "multiply()");

};

function point(){
	textview.value = textview.value+ ".";
	document.getElementById("point").removeAttribute("onclick", "point()");
}
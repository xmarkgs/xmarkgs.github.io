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
	textview.value = textview.value+ num
};
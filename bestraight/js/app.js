// JS App

// Code Get Code
var window_code = window.location.search;
var code = window_code.slice(6, 35);
console.log(code);
const xhr = new XMLHttpRequest();
xhr.open("POST", "https://github.com/login/oauth/access_token");
xhr.setRequestHeader('Content-type', 'application/x-www-urlencoded');
xhr.send({
	client_id: "83af441880ea9eca9533", 
	client_secret: "90b880f712bae73b7a4433ce27501bfd7d86de35", 
	code: code
});
xhr.onload = function (){
	console.log(this.responseText);
};

// xhr.onreadystatechange = (e) => {
//   console.log(getaccesstoken.responseText);
// };
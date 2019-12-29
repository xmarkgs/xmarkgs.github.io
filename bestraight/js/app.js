// JS App

// Code Get Code
var code = window.location.search;
console.log(code);
const xhr = new XMLHttpRequest();
xhr.open("POST", "https://github.com/login/oauth/access_token");
xhr.setRequestHeader("Accept", "application/json");
xhr.send({
	client_id: "83af441880ea9eca9533", 
	client_secret: "90b880f712bae73b7a4433ce27501bfd7d86de35", 
	code: `${code}`
});
xhr.onload = function (){
	const access_token = this.responseText;
	console.log(access_token);
};
// JS App

// Code Get Code
var window_code = window.location.search;
var code = window_code.slice(6, 30);
console.log(code);

const getaccesstoken = new XMLHttpRequest();
const urltoken='https://github.com/login/oauth/access_token';
getaccesstoken.open("POST", urltoken);

getaccesstoken.send(JSON.stringify({
	client_id = "83af441880ea9eca9533",
	client_secret = "90b880f712bae73b7a4433ce27501bfd7d86de35",
	code = `${code}`
}));

getaccesstoken.onreadystatechange = (e) => {
  console.log(getaccesstoken.responseText);
};

// var xhr = new XMLHttpRequest();
// xhr.open('POST', 'https://github.com/login/oauth/access_token', true);
// xhr.setRequestHeader('Accept', 'application/json');
// xhr.send(JSON.stringify({
//     client_id: '83af441880ea9eca9533',
//     client_secret: '90b880f712bae73b7a4433ce27501bfd7d86de35'
//     code: `${code}`;
// }));
// xhr.then(function(res){
// 	const data = res;
// 	console.log(data);
// });

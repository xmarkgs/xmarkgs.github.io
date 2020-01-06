// JS App
const window_code = window.location.search;
const code =  window_code.slice(6, 35);
console.log(code);
const post = new XMLHttpRequest();
const posturl = "https://github.com/login/oauth/access_token";
const exchangecode = {
	client_id: "83af441880ea9eca9533", 
	client_secret: "90b880f712bae73b7a4433ce27501bfd7d86de35", 
	code: `${code}`
};
post.open("POST", "https://github.com/login/oauth/access_token");
post.setRequestHeader("Accept", "application/json");
post.send(JSON.stringify(exchangecode));
post.onreadystatechange = (e) => {
	const access_token = post.responseText;
	console.log(access_token);
};

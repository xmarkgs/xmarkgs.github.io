// JS App
'use strict';

// Getting a user code
let window_code = window.location.search;
const code = window_code.slice(6, 35);
console.log(code);
// Sending a 'POST' request
const post = new XMLHttpRequest();
post.open('POST', 'https://github.com/login/oauth/access_token');
post.setRequestHeader('Access-Control-Allow-Origin', '*');
post.setRequestHeader('Accept', 'application/json');
post.send(JSON.stringify({
	client_id: '83af441880ea9eca9533', 
	client_secret: '90b880f712bae73b7a4433ce27501bfd7d86de35', 
	code: `${code}`
}));
post.onreadystatechange = () => {
	const access_token = post.responseText;
	console.log(access_token);
};

function GetUserToken(props){
	return (<h1>This is user token: </h1>);
};

ReactDOM.render(
	<GetUserToken />,
	document.querySelector('.leftcol')
);
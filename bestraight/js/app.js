// JS App
'use strict';
// const window_code = window.location.search;
const code =  window.location.search;
console.log(code);
class GetUserToken extends React.Component{
	constructor(props){
		super(props);
	}
	render() {
		const post = new XMLHttpRequest();
		post.open("POST", "https://github.com/login/oauth/access_token");
		post.setRequestHeader("Access-Control-Allow-Origin", "*");
		post.setRequestHeader("Accept", "application/json");
		post.send(JSON.stringify({
			client_id: "83af441880ea9eca9533", 
			client_secret: "90b880f712bae73b7a4433ce27501bfd7d86de35", 
			code: `${code}`
		}));
		post.onreadystatechange = (e) => {
			const access_token = post.responseText;
			console.log(access_token);
		};
		return	(<p>This is text.</p>);
		
	};
};
ReactDOM.render(
	<GetUserToken />,
	document.querySelector('.leftcol')
);

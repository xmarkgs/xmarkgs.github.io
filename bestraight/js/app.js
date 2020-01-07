// JS App
'use strict';



class GetUserToken extends React.Component{
	constructor(props){
		super(props);
	};
	componentWillMount() {
    	this.getData();
  	};
  	getData(){
  		let window_code = window.location.search;
		const code =  window_code.slice(6, 35);
		console.log(code);
  		const post = new XMLHttpRequest();
		post.open('POST', 'https://github.com/login/oauth/access_token', true);
		post.setRequestHeader('Access-Control-Allow-Origin', '*');
		post.setRequestHeader('Accept', 'application/json');
		post.send(JSON.stringify({
			client_id: '83af441880ea9eca9533', 
			client_secret: '90b880f712bae73b7a4433ce27501bfd7d86de35', 
			code: code
		}));
		post.addEventListener('load', () => {
			const access_token = JSON.stringify(post.responseText);
			console.log(access_token);
		};
		
  	};
  	render () {
  		return (<p>This is yours: {access_token}</p>);
  	};
};
	
ReactDOM.render(
	<GetUserToken />,
	document.querySelector('.leftcol')
);
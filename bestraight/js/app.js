// JS App
const request = require('superagent');

request
  .get('https://github.com/login/oauth/authorize')
  .then(res => {
  		console.log(res);
  });
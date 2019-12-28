// JS App

// Code Get Code
const code= window.location.search;
code.slice(6, 28);
console.log(code);

(function() {
    `window.request = superagent;`
    superagent
      .post('https://github.com/login/oauth/access_token')
      .send({ 
      client_id: '83af441880ea9eca9533', 
      client_secret: '90b880f712bae73b7a4433ce27501bfd7d86de35',
      code: code 
      }) // sends a JSON post body
      .set('accept', 'json')
      .end(function (err, res) {
        const data = req.body;
        res.send(data);
      });
  })();

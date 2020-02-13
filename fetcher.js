const request = require('request');
const fs = require('fs');
const args = process.argv.slice(2,4);
let text = args[0];
let path = args[1];

const fetch = function(text, path) {
  request(text, (error, response, body) => {
    fs.writeFile(`${path}`, body, (err) => {
      if (err) throw err;
      console.log('Fuck yeah!');
    });
  });
};

fetch(text, path);
const request = require('request');
const fs = require('fs');
const args = process.argv.slice(2,4);
let text = args[0];
let path = args[1];

const fetch = function(text, path) {
  request(text, (error, response, body) => {
    fs.writeFile(path, body, (err) => {
      fs.stat(path, (err, stat) => {
        const size = stat.size
        if (err) throw err;
        console.log(`Downloaded and saved ${size} bytes to ${path}`);
      })
    });
  });
};

fetch(text, path);
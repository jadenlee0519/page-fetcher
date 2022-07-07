const input = process.argv.slice(2);
const fs = require('fs');
const request = require('request');

const fetcher = (URL, file) => {
  request(URL, (error, response, body) => {
    if (error) {
      console.log(err);
    }
    fs.writeFile(file, body, err => {
      if (err) {
        console.log(`File path Invalid, please see error ${err}`);
      } else {
        console.log(`File written successfully!`);
      }
    });
  });
  fs.stat(file, (err, stats) => {
    console.log(`Downloaded and saved ${stats.size} bytes to "${file}"`);
  });
};
fetcher(input[0], input[1]);

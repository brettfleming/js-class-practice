const fs = require('fs');
const promisifiedReadfile = require('./promisifiedReadfile');

// Here we use fs.readfile() and callback functions:
fs.readFile('./file.txt', 'utf-8', (err, data) => {
    if (err) throw err;
    let firstSentence = data;
    fs.readFile('./file2.txt',  'utf-8', (err, data) => {
      if (err) throw err;
      let secondSentence = data;
      console.log(firstSentence, secondSentence);
    });
  });
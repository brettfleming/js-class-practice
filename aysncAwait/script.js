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

  // Here we use native promises with our "promisified" version of readfile:
let firstSentence;
promisifiedReadfile('./file.txt', 'utf-8')
  .then((data) => {
    firstSentence = data;
    return promisifiedReadfile('./file2.txt', 'utf-8');
  })
  .then((data) => {
    let secondSentence = data;
    console.log(firstSentence, secondSentence)
  })
  .catch((err) => {console.log(err)});

  // Here we use promisifiedReadfile() again but instead of using the native promise .then() syntax, we declare and invoke an async/await function:
async function readFiles() {
    let firstSentence = await promisifiedReadfile('./file.txt', 'utf-8');
    let secondSentence = await promisifiedReadfile('./file2.txt', 'utf-8');
    console.log(firstSentence, secondSentence);
  }
  
  readFiles();

// seeing the function of async/await
const {shopForBeans, soakTheBeans, cookTheBeans} = require('./library.js');
// when this runs properly it should return 1, 2 ,3 but the way it is wrtten means it will return 1, 3, 2 becasue the function does not wait for the reponse from the promise to run the rest of the code 
 function getBeans() {
  console.log(`1. Heading to the store to buy beans...`);
  let value = shopForBeans();
  console.log(`3. Great! I'm making ${value} beans for dinner tonight!`);
}

getBeans();

//adding in the async and await key words in these spots allows to code to run properly
//the function now waits for a response from the promise before running the rest of the code
async function getBeans() {
  console.log(`1. Heading to the store to buy beans...`);
  let value = await shopForBeans();
  console.log(`3. Great! I'm making ${value} beans for dinner tonight!`);
}

getBeans();


//mutiplue async await 
async function makeBeans() {
  //getting the bean type
  let type =  await shopForBeans();
  //console.log(type);
  // passing the bean type into soackTheBeans
  let isSoft = await soakTheBeans(type);
  //console.log(isSoft);
  //passing the boolean value retuned by soakTheBeans into cookTheBeans
  let dinner = await cookTheBeans(isSoft);
  console.log(dinner);
}
makeBeans();
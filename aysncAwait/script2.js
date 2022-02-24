function withConstructor(num){
    return new Promise((resolve, reject) => {
      if (num === 0){
        resolve('zero');
      } else {
        resolve('not zero');
      }
    });
  }
  
  withConstructor(0)
    .then((resolveValue) => {
    console.log(` withConstructor(0) returned a promise which resolved to: ${resolveValue}.`);
  });
  

  async function withAsync(num) {
    if (num === 0){
      return 'zero'
    } else {
      return 'not zero'
    }
 };


 withAsync(100)
  .then((resolveValue) => {
  console.log(` withAsync(100) returned a promise which resolved to: ${resolveValue}.`);
})

//the await keyword

const brainstormDinner = require('./library.js');


// Native promise version:
function nativePromiseDinner() {
  brainstormDinner().then((meal) => {
	  console.log(`I'm going to make ${meal} for dinner.`);
  });
}

// async/await version:
async function announceDinner() {
  let meal = await brainstormDinner();
  console.log(`I'm going to make ${meal} for dinner.`)
}
announceDinner();
//required in function 
const cookBeanSouffle = require('./library.js');

async function hostDinnerParty() {
  //the try block us to tell the code to try this line if error pass error to the catch block
  try {
    let dinner = await cookBeanSouffle()
    console.log(`${dinner} is served!`)

  }catch (error){
    //the catch block takes the error in as an argument allowing use to console.log() it to see what happened
    console.log(error);
    console.log('Ordering a pizza!')
  }
}

hostDinnerParty();

let {cookBeans, steamBroccoli, cookRice, bakeChicken} = require('./library.js');


async function serveDinner() {
  let vegetablePromise = steamBroccoli();
  let starchPromise = cookRice();
  let proteinPromise = bakeChicken();
  let sidePromise = cookBeans();
  console.log(`Dinner is served. We're having ${await vegetablePromise}, ${await starchPromise}, ${await proteinPromise}, and ${await sidePromise}.`)
}

serveDinner();
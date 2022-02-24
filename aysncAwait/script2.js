//key points 

  //async...await is syntactic sugar built on native JavaScript promises and generators.
  //We declare an async function with the keyword async.
  //Inside an async function we use the await operator to pause execution of our function until an asynchronous action completes and the awaited promise is no longer pending .
  //await returns the resolved value of the awaited promise.
  //We can write multiple await statements to produce code that reads like synchronous code.
  //We use try...catch statements within our async functions for error handling.
  //We should still take advantage of concurrency by writing async functions that allow asynchronous actions to happen in concurrently whenever possible.


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
  // adding await in front of all the the veribales below makes sure that this line of code is not run until all values have been returned by the promises
  console.log(`Dinner is served. We're having ${await vegetablePromise}, ${await starchPromise}, ${await proteinPromise}, and ${await sidePromise}.`)
}

serveDinner();

async function serveDinnerAgain() {
  let foodArray = Promise.all([steamBroccoli(), cookRice(), bakeChicken(), cookBeans()])
  let dinnerStr = "Dinner is served. We're having"
  for (let i = 0; i<foodArray.length; i++){
    if(i === 0) {
      dinnerStr += " " + foodArray[i];
    } else {
      dinnerStr += ", " + foodArray[i];
    }
    
  }
  dinnerStr += '.'
  console.log(dinnerStr)
}
// async function serveDinnerAgain() {
//   let foodArray = await Promise.all([steamBroccoli(), cookRice(), bakeChicken(), cookBeans()]);
//  let vegetable = foodArray[0];
// let starch =  foodArray[1];
// let protein =  foodArray[2];
// let side =  foodArray[3];
 
// console.log(`Dinner is served. We're having ${vegetable}, ${starch}, ${protein}, and ${side}.`);
// }

serveDinnerAgain();


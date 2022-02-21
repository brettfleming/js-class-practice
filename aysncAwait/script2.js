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

const cookBeanSouffle = require('./library.js');

async function hostDinnerParty() {
  try {
    let dinner = await cookBeanSouffle()
    console.log(`${dinner} is served!`)

  }catch (error){
    console.log(error);
    console.log('Ordering a pizza!')
  }
}
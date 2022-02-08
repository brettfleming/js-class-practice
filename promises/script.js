const inventory = {
    sunglasses: 1900,
    pants: 1088,
    bags: 1344
  };
  
  const myExecutor = (resolve, reject) => {
    if (inventory.sunglasses > 0) {
        resolve('Sunglasses order processed.');
    } else {
        reject('That item is sold out.');
    }
};

const orderSunglasses = () => {
    return new Promise(myExecutor);
};
const orderPromise = orderSunglasses();

console.log(orderPromise);


//using setTimeout
//this logs to the console first
console.log("This is the first line of code in app.js.");

const usingSTO = () => {
  console.log('hello')
}
//this is calling the usingSTO function after 2 sec
setTimeout(usingSTO, 2000);







//this will console log before usingSTO will excicute
console.log("This is the last line of code in app.js.");



const {checkInventory} = require('./library.js');

const order = [['sunglasses', 1], ['bags', 2]];

const handleSuccess = (resolvedValue) => {
    console.log(resolvedValue);
  };

  const handleFailure = (rejectionReason) => {
    console.log(rejectionReason);
  };

  checkInventory(order).then(handleSuccess, handleFailure);


//Using .catch instead of another .then to clean up the code

const {checkInventory} = require('./library.js');

const order = [['sunglasses', 1], ['bags', 2]];

const handleSuccess = (resolvedValue) => {
  console.log(resolvedValue);
};

const handleFailure = (rejectReason) => {
  console.log(rejectReason);
};

checkInventory(order).then(handleSuccess).catch(handleFailure);

//chaining promises together
const {checkInventory, processPayment, shipOrder} = require('./library.js');

const order = {
  items: [['sunglasses', 1], ['bags', 2]],
  giftcardBalance: 79.82
};
//calls the checkInvetory function and returns an array of values
checkInventory(order)
.then((resolvedValueArray) => {
  //the resolvedValueArray is passed into the next promise which expects a valid array
  return processPayment(resolvedValueArray)
 
})
//this process is repeated with the same concept for a new promise
.then((resolvedValueArray) => {
  return shipOrder(resolvedValueArray)
  
})
//logs a succes Message
.then((successMessage) => {
  console.log(successMessage);
})
//logs an error message is an error occurs
.catch((errorMessage) => {
  console.log(errorMessage);
});


//refactoring bad code
const {checkInventory, processPayment, shipOrder} = require('./library.js');

const order = {
  items: [['sunglasses', 1], ['bags', 2]],
  giftcardBalance: 79.82
};

// checkInventory(order)
//     .then((resolvedValueArray) => {
//         processPayment(resolvedValueArray)
//             .then((resolvedValueArray) => {
//                 shipOrder(resolvedValueArray)
//                     .then((successMessage) => {
//                         console.log(successMessage);
//                     });
//             });
//     });
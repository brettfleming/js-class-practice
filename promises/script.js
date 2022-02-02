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



console.log("This is the first line of code in app.js.");

const usingSTO = () => {
  console.log('hello')
}










console.log("This is the last line of code in app.js.");
//the inventory object holds all the information for the stock of the library
const inventory = {
    sunglasses: 1900,
    pants: 1088,
    bags: 1344
  };
  //this is the check inventory function
  const checkInventory = (order) => {
      //creating a new promise
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let inStock = order.every(item => inventory[item[0]] >= item[1]);
        //if this the item is in stock it responds with thr resolve response
        if (inStock) {
          resolve(`Thank you. Your order was successful.`);
        } else {
            //this is the response if the stock is out then is respponds wwith the reject response
          reject(`We're sorry. Your order could not be completed because some items are sold out.`);
        }
      }, 1000);
    })
  };
  //this is exporting the checkinventory function
  module.exports = { checkInventory };
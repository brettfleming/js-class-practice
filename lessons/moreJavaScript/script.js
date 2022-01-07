//higher order functions

//key points
    //Abstraction allows us to write complicated code in a way that’s easy to reuse, debug, and understand for human readers

    //We can work with functions the same way we would any other type of data including reassigning them to new variables

    //JavaScript functions are first-class objects, so they have properties and methods like any object

    //Functions can be passed into other functions as parameters

    //A higher-order function is a function that either accepts functions as parameters, returns a function, or both

//this function has a long discriptive name which is good but it could be terrible to have to repeat
const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
    for(let i = 1; i <= 1000000; i++) {
      if ( (2 + 2) != 4) {
        console.log('Something has gone very wrong :( ');
      }
    }
  }
  // we can assign our long discriptive name inside another function varible to make it easier to call multiplue times
  // notice that when you input the old name you drop the ()'s form the end this is becasue you want to pass the function its self into the new varible not what the function returns
  let is2p2 = checkThatTwoPlusTwoEqualsFourAMillionTimes
  //its much easier to call is2p2 a bunch of times then calling checkThatTwoPlusTwoEqualsFourAMillionTimes a bunch of times but you still get to keep the discriptive name
  is2p2();
  //just confirming that the functions real name is checkThatTwoPlusTwoEqualsFourAMillionTimes
  console.log(is2p2.name)


//simple function add 2 to a number
const addTwo = num => num + 2;

//this function takes another function in as a parameter and checks the run time of that funcion
const timeFuncRuntime = funcParameter => {
  let t1 = Date.now();
  //this is how you will call the function
  funcParameter();
  let t2 = Date.now();
  return t2 - t1;
};
 //when you pass the function through dont include the ()'s that would pass through what the function returns not the function itself
let time2p2 = timeFuncRuntime(checkThatTwoPlusTwoEqualsFourAMillionTimes);

//this fucntion takes in a function and a value as parameters
//what this function does is it evaluates the results of the function that is passed through it to make sure it gets the same result twice
let checkConsistentOutput = (func, val) => {
    let firstTry = func(val);
    let secondTry = func(val);
    if (firstTry === secondTry) {
        //if both attempts return the same thing the fist attempt is returned
        return firstTry;
    } else {
        //if it doesnt evaluate to the same thing twice this message is returned 
        return 'This function returned inconsistent results';
    }
}
// this is how you would invoke the function
// dont forget to drop the ()'s for the function you are passing through
checkConsistentOutput(addTwo, 2);

//Iterators

const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

fruits.forEach(fruit => {
  console.log(`I want to eat a ${fruit}`);
});
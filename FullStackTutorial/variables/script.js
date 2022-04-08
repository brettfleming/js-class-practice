
//varibles are stored values in memory
//key words used to declare a varible are let and const
//the type of this variable is a string
let name = 'tim';
//the type of this variable is a number
//let is used when the varible can be redeclared this isnt used very often
const age = 23;


//const is used when the varibnle is not meant to be redclared 
const lastName = 'smith'

//you can use opperators to complete mathmatical operations 
let sum = 10 + 15;
let sub = 10 - 5;
let mul = 10 * 3;
let div = 9 / 3;
//the modular opperator gives the remainder after a divition operation
let mod = 10 % 3; 
let msg = '10 / 3 = 3 with a remainder of ' + mod;
console.log(sum)
console.log(msg);

//order of operations works just like in regular math
let result = 10 * 5 + 3 - 4;
let result2 = 10((5 + 3) -4);
//== equal to (the value is the same)
//=== equal to (the value and the type are the same)
//<= less than or equal to 
//>= greater then or equal to
//!== is not equal to
if (age === 23) {
    console.log("you are old!");
}

let myAccuntBalance = 300;
let shoes = 90.43;
let coupon = 50;
if (shoes <= myAccuntBalance) {
    myAccuntBalance -= shoes;
    console.log('Just bought some nice shoes!');
    console.log('Account Balance: ' + myAccuntBalance);
}else if (shoes - coupon <= myAccuntBalance) {
    console.log('we just bought some shoes with a coupon!');
    myAccuntBalance -= shoes - coupon;
    console.log('Account Balance: ' + myAccuntBalance);

}
else {
    console.log('you are a broke a$$ bitch');
}

//the && logical operator means if both arguments are true together
//the || logical operator means if one of the two operators are true run the code
if ( 1 === 1 && 2 === 2 ){
    console.log('these are both true');

}

if (1 === 3 || 'joe' === 'joe') {
    console.log('this is the or operator in action');
}


let cat1 = 5;
let cat2 = 10;
let cat3 = 1;
let disabledHandicap = true;

if ((cat1 > cat2 && cat1 > cat3) && !disabledHandicap){
    console.log('cat 1 is the cutest!');
} else if ((cat2 > cat1 && cat2 > cat3) && !disabledHandicap){
    console.log('cat 2 is the cutest!')
    //if you had the && operator instead of the || this line would not run since the first part is not true
} else if ((cat3 > cat1 && cat3 > cat2) || disabledHandicap ){
    console.log('cat 3 is the cutest!')
};


const students = ['Timmy', 'Janessa', 'Arun'];

let naughtyList = [];
naughtyList.push(students[0]);

//indexOf returns the index number of the value you are looking for if the value is not fun it returns -1 instead
let index = naughtyList.indexOf('Timmy');

//we are checking to make sure the searched value was found
if (index > -1) {
    //this line is taking the found index and cutting it out of the array
    //we are creating a new array and replacing the old one
    naughtyList.splice(index, 1);
}
console.log(students);
console.log(naughtyList);

//array of colors
const colors = ['blue', 'green', 'yellow', 'red', 'purple', 'pink', 'orange'];
//generates random number to search the index
const randomNumber = () => {
    //math.floor makes the random number a whole number
    //if you didnt know the length of the array replace 7 with colors.length() (arrayName.length()) to find the length of the array and use that instead
    Math.floor(Math.random() * 7)
}
//the function to genorate the random color 
const genorateRandomColor = () => {
    //set number equal to the random number function
    let Number = randomNumber()
    //return the random color from the colors array
    return colors[Number]
}

// call the function
genorateRandomColor();





















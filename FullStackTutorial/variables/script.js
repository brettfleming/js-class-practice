
//varibles are stored values in memory
//key words used to declare a varible are let and const
//the type of this variable is a string
let name = 'tim';
//the type of this variable is a number
//let is used when the varible can be redeclared this isnt used very often
let age = 23;


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

if (age === 23) {
    console.log("you are old!");
}

let myAccuntBalance = 300;
let shoes = 90.43;
if (shoes <= myAccuntBalance) {
    myAccuntBalance -= shoes;
    console.log('Just bought some nice shoes!');
    console.log('Account Balance: ' + myAccuntBalance);
} else {
    console.log('you are a broke a$$ bitch');
}

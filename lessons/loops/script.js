let vacationSpots = ['New York', 'L.A.', 'Boston', 'Canada', 'Mexico']

//This is done the long way without loops
console.log(vacationSpots[0]);
console.log(vacationSpots[1]);
console.log(vacationSpots[2]);
console.log(vacationSpots[3]);
console.log(vacationSpots[4]);
//A basic for loop 
for (let counter = 5; counter < 11; counter++) {
    console.log(counter);
  }
// turning the first example into a for loop
  for (i; i < 5; i++) {
    console.log(vacationSpots[i]);
  }
//doing a for loop in reverse
  for (let counter = 3; counter >= 0; counter--){
    console.log(counter);
  }
  vacationSpots.forEach(spots => {
    console.log(spots);
  })

const vacationSpots = ['Bali', 'Paris', 'Tulum'];
// iterating through an array with a for loop using .length as the condition
for (let i = 0; i < vacationSpots.length; i++){
  console.log(`I would love to visit ${vacationSpots[i]}`);
}

//nested for loops
let bobsFollowers =['jim', 'tim', 'kim', 'pam']
let tinasFollowers = ['jim', 'tom', 'pam']
let mutualFollowers = []

for (let i = 0; i < bobsFollowers.length; i++) {
  //the nested for loop lets you iterate through another array
  for (let j = 0; j < tinasFollowers.length; j++) {
    //if the follower follows both bob and tina they get added to the mutal friends array show below;
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
};
//while loops
const cards = ['diamond', 'spade', 'heart', 'club'];
let currentCard = 'diamond'

while (currentCard !== 'spade') {
  currentCard = cards[Math.floor(Math.random() * 4)];

  console.log(currentCard)
}
//do while loops
let cupsOfSugarNeeded = 5

let cupsAdded = 0
//do while loops let you have a while loop exicute at least once before checking the conditon
do {
  //this code will exicute at least once
  cupsAdded++
  console.log(cupsAdded + ' cup was added') 
  //this is the contion in which the code above will either continue running or stop running
 } while (cupsAdded < cupsOfSugarNeeded);

//break key work
 const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

for (let i = 0; i < rapperArray.length; i++) {
  if (rapperArray[i] === "Notorious B.I.G." ){
    console.log(rapperArray[i])
    //the break key word stops the loop
    break;
  }
  console.log(rapperArray[i])
}
console.log("And if you don't know, now you know.")

//this is a whale language translator
//it takes the input phrase or word and changes it into whale 
let input = 'turpentine and turtles'
//whales only use vowels execpt for y you can see the option of letters in the array below
let vowels = ['a', 'e', 'i', 'o', 'u'];
let resultArray = []
// the first for loop iterats through each letter in the input phrase
for (let i = 0; i < input.length; i++) {
  // console.log('i is '+ i);
  //the second for loop takes the letter from above and commpares it to the to the vowels array and if it matches it addes it to the result array
  for (let j = 0; j < vowels.length; j++) {
    // console.log('j is '+ j);
    // this if statement is what compares the two inputs 
    if (input[i] === vowels[j]){
      // so in whale they double e's and u's so this checks for that and doubles them when needed
      if(input[i] === 'e' || input[i] === 'u'){
        resultArray.push(input[i]);
        resultArray.push(input[i]);
      } else { resultArray.push(input[i]);
      }
    }
  }
}
console.log(resultArray.join('').toUpperCase());

let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

const easilyIndex = secretMessage.indexOf('easily');
const getIndex = secretMessage.indexOf('get');  
// console.log(secretMessage.length)
secretMessage.pop();

// console.log(secretMessage.length)
secretMessage.push('to', 'program');

secretMessage[easilyIndex] = 'right';

secretMessage.shift();

secretMessage.unshift('Programming')

secretMessage.splice(getIndex, 5, 'know');
console.log(secretMessage.join(' '));
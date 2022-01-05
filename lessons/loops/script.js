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
  for (let j = 0; j < tinasFollowers.length; j++) {
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
  cupsAdded++
  console.log(cupsAdded + ' cup was added') 
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

let input = 'turpentine and turtles'
let vowels = ['a', 'e', 'i', 'o', 'u'];
let resultArray = []

for (let i = 0; i < input.length; i++) {
  // console.log('i is '+ i);
  for (let j = 0; j < vowels.length; j++) {
    // console.log('j is '+ j);
    if (input[i] === vowels[j]){
      if(input[i] === 'e' || input[i] === 'u'){
        resultArray.push(input[i]);
        resultArray.push(input[i]);
      } else { resultArray.push(input[i]);
      }
    }
  }
}
console.log(resultArray.join('').toUpperCase());
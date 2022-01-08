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

//key points
    //.forEach() is used to execute the same code on every element in an array but does not change the array and returns undefined.
    //.map() executes the same code on every element in an array and returns a new array with the updated elements.
    //.filter() checks every element in an array to see if it meets certain criteria and returns a new array with the elements that return truthy for the criteria.
    //.findIndex() returns the index of the first element of an array that satisfies a condition in the callback function. It returns -1 if none of the elements in the array satisfies the condition.
    //.reduce() iterates through an array and takes the values of the elements and returns a single value.

const fruits = ['mango', 'papaya', 'pineapple', 'apple'];
//the forEach method exicutes the callback function to all of the elements in the array
fruits.forEach(fruit => {
  console.log(`I want to eat a ${fruit}`);
});
//the map method
const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];
//map does the same thing as the foreach method except the map method returns a new array 
const secretMessage = animals.map(animal => {
    //this is returning the first letter of each element in the array
  return animal[0]
})
console.log(secretMessage.join(''));


const bigNumbers = [100, 200, 300, 400, 500];
//mapping an array of numbers divided by 100
const smallNumbers= bigNumbers.map(number => {
  return number/100 
})
console.log(smallNumbers);

//the filter method

const randomNumbers = [375, 200, 3.14, 7, 13, 852];
//the filter method creates a new array like the map method but filters the mothod based on the condtion that you pass through it
const smallNumbers = randomNumbers.filter(number => {
  return number < 250; 
})

console.log(smallNumbers);

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];

//filtering out all the words less then 7 characters long
const longFavoriteWords = favoriteWords.filter(word => {
  return word.length > 7
})
 console.log(longFavoriteWords)
//The findIndex method
 const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];
//finds the index of the element you are looking for
const foundAnimal = animals.findIndex(animal => {
  return animal === 'elephant'
})

const startsWithS = animals.findIndex(animal => {
  return animal[0] === 's'
})

//the reduce Method
const newNumbers = [1, 3, 5, 7];

//the reduce method reduces the array down to a single value
const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log('The value of accumulator: ', accumulator);
  console.log('The value of currentValue: ', currentValue);
  return accumulator + currentValue
}, 10)

console.log(newSum)

//Mini Linter project
let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

let storyWords = story.split(' ');
console.log(storyWords.length)
//filtering out the unnecessaryWords from the story
let betterWords = storyWords.filter(word => {
    //.includes normally ivaluates to true when the the words match but using the inverse operator we can change that
  return !unnecessaryWords.includes(word)
});


console.log(betterWords);

let wordCount = 0
betterWords.forEach(word => {
  overusedWords.forEach(overusedWord => {
    if(word === overusedWord) {
      wordCount++
    }
  })
})
console.log(wordCount)

let sentences = 0;
betterWords.forEach(word => {
  if (word[word.length-1] === '.' || word[word.length-1] === '!') {
    sentences+=1;
  }
});

console.log(`the total word count is ${storyWords.length}, the number of sentences is ${sentences}, lastly the count for oversued words is ${wordCount}. `);

console.log(betterWords.join(' '))
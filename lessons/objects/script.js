//objects


//Key Points
  //Objects store collections of key-value pairs.
  //Each key-value pair is a property—when a property is a function it is known as a method.
  //An object literal is composed of comma-separated key-value pairs surrounded by curly braces.
  //You can access, add or edit a property within an object by using dot notation or bracket notation.
  //We can add methods to our object literals using key-value syntax with anonymous function expressions as values or by using the new ES6 method syntax.
  //We can navigate complex, nested objects by chaining operators.
  //Objects are mutable—we can change their properties even when they’re declared with const.
  //Objects are passed by reference— when we make changes to an object passed into a function, those changes are permanent.
  //We can iterate through objects using the For...in syntax



let fasterShip = {
    homePlanet: 'Earth',
  color: 'silver',
  'Fuel Type': 'Turbo Fuel',
  numCrew: 5,
  flightPath: ['Venus', 'Mars', 'Saturn']
  }
//dot notation is how you select properties of an object so they can be used
let crewCount = spaceship.numCrew;

let planetArray = spaceship.flightPath;
//you can change the value of an object property with dot or bracket notation
spaceship.color = 'glorious gold'
//if no property exist with that name it will be created
spaceship.numEngines = 6

delete spaceship['Secret Mission'];

let spaceship2 = {
    'Fuel Type' : 'Turbo Fuel',
    'Active Mission' : true,
    homePlanet : 'Earth', 
    numCrew: 5
   };
  //bracket notation is used when the key has numbers, spaces, or special characters in them
  let propName =  'Active Mission';
  
  let isActive = spaceship2['Active Mission']
  
  
  console.log(isActive)

//object Methods
let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

const alienShip = {
  retreat: function () {
    console.log(retreatMessage)
  }, 
  takeOff: function () {
    console.log('Spim... Borp... Glix... Blastoff!')
  }
}
//when you want to evoke the method use dot notation and add ()'s at the end
alienShip.retreat();

alienShip.takeOff();
//nested objects
let spaceship3 = {
  passengers: [{name: 'steve'}],
  telescope: {
    yearBuilt: 2018,
    model: "91031-XLT",
    focalLength: 2032 
  },
  //the crew object has more objects in it
  crew: {
    captain: { 
      name: 'Sandra', 
      degree: 'Computer Engineering', 
      encourageTeam() { console.log('We got this!') },
     'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
  },
  engine: {
    model: "Nimbus2000"
  },
  nanoelectronics: {
    computer: {
      terabytes: 100,
      monitors: "HD"
    },
    'back-up': {
      battery: "Lithium",
      terabytes: 50
    }
  }
}; 

//when selecting you might need to use both bracket and dot notation
let capFave = spaceship3.crew.captain['favorite foods'][0]

let firstPassenger = spaceship3.passengers[0]

//Reassingment
let spaceship4 = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth'
};

let greenEnergy = obj => {
  obj['Fuel Type'] = 'avocado oil'
}

let remotelyDisable = obj => {
  obj.disabled = true
}

greenEnergy(spaceship4);
remotelyDisable(spaceship4);
//The console.log returns this { 'Fuel Type': 'avocado oil', homePlanet: 'Earth', disabled: true }
console.log(spaceship4)

//For in loops
let spaceship5 = {
  crew: {
  captain: { 
      name: 'Lily', 
      degree: 'Computer Engineering', 
      cheerTeam() { console.log('You got this!') } 
      },
  'chief officer': { 
      name: 'Dan', 
      degree: 'Aerospace Engineering', 
      agree() { console.log('I agree, captain!') } 
      },
  medic: { 
      name: 'Clementine', 
      degree: 'Physics', 
      announce() { console.log(`Jets on!`) } },
  translator: {
      name: 'Shauna', 
      degree: 'Conservation Science', 
      powerFuel() { console.log('The tank is full!') } 
      }
  }
}; 
//this for in loop iterates through each crewmember and their name
for (let crewMember in spaceship5.crew) {
console.log(`${crewMember}: ${spaceship5.crew[crewMember].name}`);
}
//this for in loop iterates through each crewmember and their degree
for (let crewMember in spaceship5.crew) {
  console.log(`${spaceship5.crew[crewMember].name}: ${spaceship5.crew[crewMember].degree}`);
}

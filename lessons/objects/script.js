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
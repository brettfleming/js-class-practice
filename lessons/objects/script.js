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

spaceship.color = 'glorious gold'

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
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

let spaceship2 = {
    'Fuel Type' : 'Turbo Fuel',
    'Active Mission' : true,
    homePlanet : 'Earth', 
    numCrew: 5
   };
  
  let propName =  'Active Mission';
  
  let isActive = spaceship2['Active Mission']
  
  
  console.log(isActive)
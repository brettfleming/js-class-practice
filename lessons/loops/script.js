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
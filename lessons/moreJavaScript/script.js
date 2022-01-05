//higher order functions

//this function has a long discriptive name which is good but it could be terrible to have to repeat
const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
    for(let i = 1; i <= 1000000; i++) {
      if ( (2 + 2) != 4) {
        console.log('Something has gone very wrong :( ');
      }
    }
  }
  // we can assign our long discriptive name inside another function varible to make it easier to call multiplue times
  let is2p2 = checkThatTwoPlusTwoEqualsFourAMillionTimes
  
  is2p2();
  
  console.log(is2p2.name)
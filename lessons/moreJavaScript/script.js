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
  // notice that when you input the old name you drop the ()'s form the end this is becasue you want to pass the function its self into the new varible not what the function returns
  let is2p2 = checkThatTwoPlusTwoEqualsFourAMillionTimes
  //its much easier to call is2p2 a bunch of times then calling checkThatTwoPlusTwoEqualsFourAMillionTimes a bunch of times but you still get to keep the discriptive name
  is2p2();
  //just confirming that the functions real name is checkThatTwoPlusTwoEqualsFourAMillionTimes
  console.log(is2p2.name)



const addTwo = num => num + 2;

const timeFuncRuntime = funcParameter => {
  let t1 = Date.now();
  funcParameter();
  let t2 = Date.now();
  return t2 - t1;
};

let time2p2 = timeFuncRuntime(checkThatTwoPlusTwoEqualsFourAMillionTimes);

let checkConsistentOutput = (func, val) => {
    let firstTry = func(val);
    let secondTry = func(val);
    if (firstTry === secondTry) {
        return firstTry;
    } else {
        return 'This function returned inconsistent results';
    }
}

checkConsistentOutput(addTwo, 2);
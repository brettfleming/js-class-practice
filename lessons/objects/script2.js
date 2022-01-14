//advanced object stuff

const robot = {
    model: '1E78V2',
    energyLevel: 100,
    provideInfo() {
        return `I am ${this.model} and my current energy level is ${this.energyLevel}`
      }
  };

// console.log's, I am 1E78V2 and my current energy level is 100   
console.log(robot.provideInfo())


//getter methods
const robot2 = {
    _model: '1E78V2',
    _energyLevel: 100,
    get energyLevel() {
      if (typeof this._energyLevel === 'number') {
        return `My current energy level is ${this._energyLevel}`
      } else {
        return `System malfunction: cannot retrieve energy level`
      }
    }
  };
  
  
  console.log(robot2.energyLevel)


//setter methods

const robot3 = {
    _model: '1E78V2',
    _energyLevel: 100,
    _numOfSensors: 15,
    get numOfSensors(){
      if(typeof this._numOfSensors === 'number'){
        return this._numOfSensors;
      } else {
        return 'Sensors are currently down.'
      }
    },
    set numOfSensors(num){
      if(typeof num === 'number' && num >= 0) {
        this._numOfSensors = num
      } else {
        console.log('Pass in a number that is greater than or equal to 0')
      };
    }
    
  };
  
  robot3.numOfSensors = 100
  
  console.log(robot3.numOfSensors)

  //objects factories
  //kinda like classes 

  const robotFactory = (model, mobile) => {
    return {
      model: model,
      mobile: mobile,
      beep(){
          console.log('beep boop')
      }
    }
  }
// you can use short hand to do this as well
        //   const robotFactory = (model, mobile) => {
        //     return {
        //       model,
        //       mobile,
        //       beep(){
        //           console.log('beep boop')
        //       }
        //     }
        //   }
  
  const tinCan = robotFactory('P-500', true);
  
  tinCan.beep()

  //destructured assignment

  const robot4 = {
    model: '1E78V2',
    energyLevel: 100,
    functionality: {
      beep() {
        console.log('Beep Boop');
      },
      fireLaser() {
        console.log('Pew Pew');
      },
    }
  };
  
  const {functionality} = robot4
  
  functionality.beep()


//built-in object methods

const robot = {
	model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};
const robotKeys = Object.keys(robot);

console.log(robotKeys);

const robotEntries = Object.entries(robot)


console.log(robotEntries);

const newRobot = Object.assign({laserBlaster: true, voiceRecognition: true}, robot)

console.log(newRobot);
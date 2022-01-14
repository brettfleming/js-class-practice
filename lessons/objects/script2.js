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
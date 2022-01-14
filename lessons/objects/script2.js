const robot = {
    model: '1E78V2',
    energyLevel: 100,
    provideInfo() {
        return `I am ${this.model} and my current energy level is ${this.energyLevel}`
      }
  };

// console.log's, I am 1E78V2 and my current energy level is 100   
console.log(robot.provideInfo())
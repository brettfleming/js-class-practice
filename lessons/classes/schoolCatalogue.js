class School {
    constructor(name, level, numberOfStudents) {
      this._name = name;
      this._level = level
      this._numberOfStudents = numberOfStudents
    } 
  
    get name() {
      return this._name
    }
    get level() {
      return this._level
    }
    get numberOfStudents() {
      return this._numberOfStudents
    }

    set numberOfStudents(number) {
        if (typeof number === 'number' ) {
          this._numberOfStudents = number
        } else {
          console.log('Invalid input: numberOfStudents must be set to a Number.')
        }
      }
  
    quickFacts() {
  
    }
    static pickSubstituteTheacher() {
  
    }
  }
  
  class Primary extends School {
    constructor(name, level, numberOfStudents ) {
    super(name, level, numberOfStudents)
    this._pickupPolicy = ''
    }
  
    get pickupPolicy() {
      return this._pickupPolicy
    }
  }
  
  class Middle extends School {
    constructor(name, level, numberOfStudents ) {
    super(name, level, numberOfStudents)
    }
  }

  class High extends School {
    constructor(name, level, numberOfStudents, sportsTeams  ) {
    super(name, level, numberOfStudents)
    this._sportsTeams = sportsTeams
    }
  
    get sportsTeams() {
      return this._sportsTeams 
    }
  }
  
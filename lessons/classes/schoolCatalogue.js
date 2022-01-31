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
        if (typeof number === 'number') {
            this._numberOfStudents = number
        } else {
            console.log('Invalid input: numberOfStudents must be set to a Number.')
        }
    }
    // the quickFacts method console.logs a message about the school
    quickFacts() {
        console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`)

    }
    //this is a tatic method that can only be called on the school class
    static pickSubstituteTheacher(substituteTeachers) {
        return substituteTeachers[Math.floor(Math.random() * substituteTeachers.length)]

    }
}

class Primary extends School {
    constructor(name, numberOfStudents, pickupPolicy) {
        super(name, 'primary', numberOfStudents)
        this._pickupPolicy = pickupPolicy
    }

    get pickupPolicy() {
        return this._pickupPolicy
    }
}

class Middle extends School {
    constructor(name, numberOfStudents) {
        super(name, 'middle', numberOfStudents)
    }
}

class High extends School {
    constructor(name, numberOfStudents, sportsTeams) {
        super(name, 'high', numberOfStudents)
        this._sportsTeams = sportsTeams
    }

    get sportsTeams() {
        return this._sportsTeams
    }
}

const lorraineHansbury = new Primary('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.')
lorraineHansbury.quickFacts()
const sub = School.pickSubstituteTheacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli'])
const alSmith = new High('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field'])

console.log(alSmith.sportsTeams)
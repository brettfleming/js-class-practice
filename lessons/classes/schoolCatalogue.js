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

    quickFacts() {
        console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`)

    }
    static pickSubstituteTheacher(substituteTeachers) {
        return substituteTeachers[Math.floor(Math.random() * substituteTeachers.length)]

    }
}

class Primary extends School {
    constructor(name, level, numberOfStudents, pickupPolicy) {
        super(name, 'primary', numberOfStudents)
        this._pickupPolicy = pickupPolicy
    }

    get pickupPolicy() {
        return this._pickupPolicy
    }
}

class Middle extends School {
    constructor(name, level, numberOfStudents) {
        super(name, 'middle', numberOfStudents)
    }
}

class High extends School {
    constructor(name, level, numberOfStudents, sportsTeams) {
        super(name, 'high', numberOfStudents)
        this._sportsTeams = sportsTeams
    }

    get sportsTeams() {
        return this._sportsTeams
    }
}
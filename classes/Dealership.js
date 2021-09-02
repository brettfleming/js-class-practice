const Employee = require('./Employee');
const Vehicle = require('./Vehicle');


class Dealership {
    constructor(name, owner, employeeCount) {
        this.name = name;
        this.owner = owner;
        this.employeeCount = employeeCount;
        this.Vehicles = []
        this.employees = []
    }
}
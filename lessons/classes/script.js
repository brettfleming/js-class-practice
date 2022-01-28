// intro to classes

// key points

    //Classes are templates for objects.
    //Javascript calls a constructor method when we create a new instance of a class.
    //Inheritance is when we create a parent class with properties and methods that we can extend to child classes.
    //We use the extends keyword to create a subclass.
    //The super keyword calls the constructor() of a parent class.
    //Static methods are called on the class, but not on instances of the class.

//classes are special types of objects that are like templates to mass produce objects
class Dog {
    //the constructor is how you can create a new object and you will pass proporties into it
    constructor(name) {
      this._name = name;
      this._behavior = 0;
    }
  
    get name() {
      return this._name;
    }
    get behavior() {
      return this._behavior;
    }   
  
    incrementBehavior() {
      this._behavior ++;
    }
  }

const halley = new Dog('Halley');
console.log(halley.name); // Print name value to console
console.log(halley.behavior); // Print behavior value to console
halley.incrementBehavior(); // Add one to behavior
console.log(halley.name); // Print name value to console
console.log(halley.behavior); // Print behavior value to console


class Surgeon {
    constructor(name, department) {
      this._name = name;
      this._department = department;
      this._remainingVacationDays = 20;
    }
  
    get name() {
      return this._name;
    }
  
    get department() {
      return this._department;
    }
  
    get remainingVacationDays() {
      return this._remainingVacationDays;
    }
  
    takeVacationDays(daysOff) {
      this._remainingVacationDays -= daysOff;
    }
  }
  
  const surgeonRomero = new Surgeon('Francisco Romero', 'Cardiovascular');
  const surgeonJackson = new Surgeon('Ruth Jackson', 'Orthopedics');

  console.log(surgeonRomero.name)
surgeonRomero.takeVacationDays(3)
console.log(surgeonRomero.remainingVacationDays)

//superclasses and subclasses
// parent class/superclass
//the super class holds the information that is the same for all of its subclasses
class HospitalEmployee {
    constructor(name) {
      this._name = name;
      this._remainingVacationDays = 20
    }
  
    get name() {
      return this._name
    }
  
    get remainingVacationDays() {
      return this._remainingVacationDays
    }
  
    takeVacationDays(daysOff) {
      this._remainingVacationDays -= daysOff
    }

    static generatePassword() {
        return Math.floor(Math.random()*10000);
      }
  }
//subclass/child class
//the subclass will inherite properties from the superclass
  class Nurse extends HospitalEmployee {
    constructor(name, certifications) {
        //you need to call the super before you create any of the new proporties that this subclass will have that are special to it
      super(name);
      this._certifications = certifications;
    } 
  
    get certifications() {
      return this._certifications;
    }
    addCertification(newCertification) {
      this._certifications.push(newCertification);
    }
  }
  
  const nurseOlynyk = new Nurse('Olynyk', ['Trauma','Pediatrics']);
  nurseOlynyk.takeVacationDays(5);
  console.log(nurseOlynyk.remainingVacationDays);
  nurseOlynyk.addCertification('Genetics')
  console.log(nurseOlynyk.certifications)
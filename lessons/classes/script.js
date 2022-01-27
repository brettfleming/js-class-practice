// intro to classes

//classes are special types of objects that are like templates to mass produce objects
class Dog {
    //the constructor is how you can create a new object 
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
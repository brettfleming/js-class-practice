class Media {
    constructor(title){
      this._title = title;
      this._isCheckedOut = false;
      this._ratings = []; 
    }
    get title(){
      return this._title
    }
    get isCheckedOut(){
      return this._isCheckedOut;
    }
    get ratings() {
      return this._ratings
    }
    getAverageRating() {
      const average = arr => arr.reduce((a,b) => a + b, 0) / arr.length;
  
      return average(this._ratings).toFixed(1)
      
  
    }
    toggleCheckOutStatus() {
        if(this._isCheckedOut === false) {
          this._isCheckedOut = true
        } else {
          this._isCheckedOut = false
        }
  
    }
    addRating(rating) {
      this._ratings.push(rating)
  
    }
  }
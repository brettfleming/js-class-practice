const menu = {
    _courses = {
        appetizers: [],
        mains: [],
        desserts: [],
    },
    get appetizers() {
  
    }, 
    set appetizers(appetizer) {
  
    },
    get mains() {
  
    }, 
    set mains(main) {
  
    },
    get desserts() {
  
    }, 
    set desserts(dessert) {
  
    },
    get courses() {
      return {
        appetizers: this.appetizers,
        mains: this.mains,
        desserts: this.desserts
      }
    },
    addDishToCourse(courseName, dishName, dishPrice) {
      const dish = {
        name: dishName,
        price: dishPrice,
      };
      this._courses[courseName].push(dish);
    }
  
  };
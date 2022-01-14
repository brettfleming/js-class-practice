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
    },
    getRandomDishFromCourse(courseName) {
      const dishes = this._courses[courseName]
      const randomIndex = Math.floor(Math.random() * dishes.length);
      return dishes[randomIndex]
  
    },
    generateRandomMeal() {
      const appetizer = getRandomDishFromCourse(appetizers);
      const main = getRandomDishFromCourse(mains);
      const dessert = getRandomDishFromCourse(desserts);
      console.log(`The appetizer is ${appetizer.name}, the main course is ${main.name}, finally dessert will be ${dessert.name}, total price: ${appetizer.price + main.price + dessert.price} `)
  
    }
  
  };
const menu = {
    _courses: {
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
      const appetizer = this.getRandomDishFromCourse('appetizers');
      const main = this.getRandomDishFromCourse('mains');
      const dessert = this.getRandomDishFromCourse('desserts');
      console.log(`The appetizer is ${appetizer.name}, the main course is ${main.name}, finally dessert will be ${dessert.name}, total price: ${appetizer.price + main.price + dessert.price} `)
  
    }
  
  };
  
  menu.addDishToCourse('appetizers', 'chicken wings', 8);
  menu.addDishToCourse('appetizers', 'chicken tenders', 5);
  menu.addDishToCourse('appetizers', 'onion rings', 6);
  
  menu.addDishToCourse('mains', 'chicken alfrado', 23);
  menu.addDishToCourse('mains', 'Ribeye steak', 30);
  menu.addDishToCourse('mains', 'chicken cesear salad', 15);
  
  menu.addDishToCourse('desserts', 'chacolate cake', 10);
  menu.addDishToCourse('desserts', 'cookie and ice cream', 7);
  menu.addDishToCourse('desserts', 'strawberry cheesecake', 12);
  
  menu.generateRandomMeal()
  
const menu = {
    // the underscore in front of courses is to tell other developrs that this varibale is not meant to be changed 
    _courses: {
        appetizers: [],
        mains: [],
        desserts: [],
    },
    // All of the get methods console.log the respective array of courses
    get appetizers() {
        console.log(this._courses.appetizers)
    },
    //All of the set functions check to make sure the name of the dish is a string and the price is a number 
    set appetizers(appetizer) {
        if(typeof appetizer.name === 'string' && typeof appetizer.price === 'number' && typeof appetizer.calories === 'number' ) {
            this._courses.appetizers.push(appetizer);
        } else {
            console.log('Invaled input please try again');
        }
    },
    get mains() {
        console.log(this._courses.mains)
    },
    set mains(main) {
        if(typeof main === 'string' && typeof main.price === 'number' && typeof main.calories === 'number' ) {
            this._courses.mains.push(main);
        } else {
            console.log('Invaled input please try again');
        }
    },
    get desserts() {
        console.log(this._courses.desserts)
    },
    set desserts(dessert) {
        if(typeof dessert === 'string' && typeof dessert.price === 'number' && typeof dessert.calories === 'number' ) {
            this._courses.desserts.push(dessert);
        } else {
            console.log('Invaled input please try again');
        }
    },
    get courses() {
        return {
            appetizers: this.appetizers,
            mains: this.mains,
            desserts: this.desserts
        }
    },
    addDishToCourse(courseName, dishName, dishPrice, dishCalories) {
        //could use destructured assignment if i change the passed through variables to course, Name, and Price
        // const dish = {
        //     name,
        //     price
        // };
        const dish = {
            name: dishName,
            price: dishPrice,
            calories: dishCalories
        };
        this._courses[courseName].push(dish);
    },
    getRandomDishFromCourse(courseName) {
        const dishes = this._courses[courseName]
        //generates a random number between 0 and the length of the dishes array
        //math.floor makes it a whole number
        const randomIndex = Math.floor(Math.random() * dishes.length);
        return dishes[randomIndex]

    },
    generateRandomMeal() {
        //need to use the this key word to call the method getRandomDishForm will inside the menu object
        const appetizer = this.getRandomDishFromCourse('appetizers');
        const main = this.getRandomDishFromCourse('mains');
        const dessert = this.getRandomDishFromCourse('desserts');
        console.log(`The appetizer is ${appetizer.name}, the main course is ${main.name}, finally dessert will be ${dessert.name}, total calories ${appetizer.calories + main.calories + dessert.calories}, total price: ${appetizer.price + main.price + dessert.price} `)

    }

};
//calling the getter methods
//will be a console log the arrays for each course
menu.appetizers

menu.mains

menu.desserts
//adding dishes to the appetizers array
menu.addDishToCourse('appetizers', 'chicken wings', 8, 500);
menu.addDishToCourse('appetizers', 'chicken tenders', 5, 350);
menu.addDishToCourse('appetizers', 'onion rings', 6, 600);
//adding dishes to the mains array
menu.addDishToCourse('mains', 'chicken alfrado', 23, 800);
menu.addDishToCourse('mains', 'Ribeye steak', 30, 950);
menu.addDishToCourse('mains', 'chicken cesear salad', 15, 400);
//adding dishes to the desserts array
menu.addDishToCourse('desserts', 'chacolate cake', 10, 475);
menu.addDishToCourse('desserts', 'cookie and ice cream', 7, 450);
menu.addDishToCourse('desserts', 'strawberry cheesecake', 12, 375);

menu.generateRandomMeal()

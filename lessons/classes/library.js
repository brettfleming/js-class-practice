class Media {
    constructor(title) {
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = [];
    }
    get title() {
        return this._title
    }
    get isCheckedOut() {
        return this._isCheckedOut;
    }
    get ratings() {
        return this._ratings
    }
    getAverageRating() {
        const average = arr => arr.reduce((a, b) => a + b, 0) / arr.length;

        return average(this._ratings).toFixed(1)


    }
    toggleCheckOutStatus() {
        if (this._isCheckedOut === false) {
            this._isCheckedOut = true
        } else {
            this._isCheckedOut = false
        }

    }
    addRating(rating) {
        this._ratings.push(rating)

    }
}

class Book extends Media {
    constructor(title, author, pages) {
        super(title)
        this._author = author;
        this._pages = pages;
    }

    get author() {
        return this._author;
    }

    get pages() {
        return this._pages
    }
}


class Movie extends Media {
    constructor(title, director, runTime) {
        super(title)
        this._director = director;
        this._runTime = runTime;
    }

    get director() {
        return this._director;
    }

    get runTime() {
        return this._runTime;
    }
}

class CD extends Media {
    constructor(title, artist, songs) {
        super(title)
        this._artist = artist;
        this._songs = songs;
    }

    get artist() {
        return this._artist;
    }

    get songs() {
        return this._songs;
    }
}

const book1 = new Book('A Short History of Nearly Everything', 'Bill Bryson', 544);
console.log(book1.title)
book1.toggleCheckOutStatus()
console.log(book1.isCheckedOut)
book1.toggleCheckOutStatus()
console.log(book1.isCheckedOut)
book1.addRating(4);
book1.addRating(5);
book1.addRating(5);
console.log(book1.getAverageRating())

const movie1 = new Movie('speed', 'Jan de Bont', 116);
console.log(movie1.director)

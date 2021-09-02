class Schools {
    constructor(name, state, studentCount) {
        this.name = name;
        this.state = state;
        this.studentCount= studentCount;
    }

    isSchoolFull = () => {
        if (this.studentCount === 10000){
            console.log('the school is full no more students!')
        } else {
            console.log('we are accepting students');
        }
    }
}
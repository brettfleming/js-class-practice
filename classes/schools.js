class Schools {
    constructor(name, state, studentCount) {
        this.name = name;
        this.state = state;
        this.studentCount= studentCount;
        this.fullSchool = () => {
            if (this.studentCount === 10000){
                console.log('the school is full no more students!')
            }
        }
    }
}

const arrayOfNames = ['abby', 'tim', 'jim', 'kim', 'james']


// the for each loop runs the code for each of the items in the array that is provided
const forEachLoop = () => {
    arrayOfNames.forEach(name => {
        console.log(name);
    })    

};
// a for loop run for the lenth provided
const forLoop = () => {
    for (let i = 0; i < arrayOfNames.length; i++) {
        console.log(arrayOfNames[i]);
      }

};
// a while loop runs as long as the conditon is still being met
const whileLoops = () => {
    while (i < 4) {
        console.log(arrayOfNames[i]);
        i++;
      }
};
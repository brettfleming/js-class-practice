/* shape-area.js */
const PI = Math.PI;

const circleArea = (radiusLength) => {
 return PI * Math.pow(radiusLength,2) 
}

const squareArea = (sideLength) => {
 return sideLength * sideLength
}

module.exports.circleArea = circleArea;
module.exports.squareArea = squareArea;
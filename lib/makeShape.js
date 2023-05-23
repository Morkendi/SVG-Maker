const Circle = require('./circle');
const Square = require('./square');
const Triangle = require('./triangle');

const makeShape = (data) => {
    const{logoShape} = data; 
    switch (logoShape) {
        case 'circle':
            const makeCircle = new Circle(data);
            return makeCircle;
            break;

        case 'square':
            const makeSquare = new Square(data);
            return makeSquare;
            break;
        
        case 'triangle':
            const makeTriangle = new Triangle(data);
            return makeTriangle;
            break;

        default:
            return 'No shape selected'
            break;
    }
};

module.exports = {makeShape};
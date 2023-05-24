const Circle = require('../lib/circle');
const Square = require('../lib/square');
const Triangle = require('../lib/triangle');
const Shape = require('../lib/shape');

describe ('TestShapes', () => {
    describe('TestCircle', () => {
        it ('Should return a tag with a fill parameter', () => {
            const response = {
                logoColor: 'red'
            }
            const newCircle = new Circle(response);
            const logoCircle = newCircle.render();
            const result = '<circle cx="50" cy="50" r="50" fill="red" />'
            expect(logoCircle).toEqual(result);
        })
    })
    describe('TestSquare', () => {
        it ('Should return a tag with a fill parameter', () => {
            const response = {
                logoColor: 'blue'
            }
            const newSquare = new Square(response);
            const logoSquare = newSquare.render();
            const result = '<rect width="100" height="100" rx="15" fill="blue" />'
            expect(logoSquare).toEqual(result);
        })
    })
    describe('TestTriangle', () => {
        it ('Should return a tag with a fill parameter', () => {
            const response = {
                logoColor: 'green'
            }
            const newTriangle = new Triangle(response);
            const logoTriangle = newTriangle.render();
            const result = '<polygon points="100 0, 0 ,0 50, 100" fill="green" />'
            expect(logoTriangle).toEqual(result);
        })
    })
})
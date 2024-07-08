const {Circle, Triangle, Square} = require('./shapes.js');


// Testing that each shape renders properly based off provided inputs
describe('Shape rendering', () => {
    describe('Circle', () => {
        it('should return a rendered section for the svg file containing the desired circle shape and color, text, and text color', () => {
            const text = 'SVG';
            const colorText = 'white';
            const colorShape = 'blue';
            const shape = new Circle(text, colorText, colorShape);
            expect(shape.render()).toEqual(`<circle cx="150" cy="100" r="80" fill="blue" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>`)
        });
    });
    
    describe('Triangle', () => {
        it('should return a rendered section for the svg file containing the desired triangle shape and color, text, and text color', () => {
            const text = 'ABC';
            const colorText = 'yellow';
            const colorShape = 'green';
            const shape = new Triangle(text, colorText, colorShape);
            expect(shape.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="green" />

  <text x="150" y="175" font-size="60" text-anchor="middle" fill="yellow">ABC</text>`)
        });
    });
    
    describe('Square', () => {
        it('should return a rendered section for the svg file containing the desired square shape and color, text, and text color', () => {
            const text = 'DEF';
            const colorText = 'red';
            const colorShape = '#00FF00';
            const shape = new Square(text, colorText, colorShape);
            expect(shape.render()).toEqual(`<rect x="75" y="50" width="150" height="100" fill="#00FF00" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="red">DEF</text>`)
        });
    });
});

describe('Class error', () => {
    describe('Circle', () => {
        it('should return an error message saying that there are too many text characters', () => {
            const text = 'SVGG';
            const colorText = 'yellow';
            const colorShape = 'green';
            const shape = () => new Circle(text, colorText, colorShape);
            const err = new Error('text must contain only up to three characters');
            expect(shape).toThrow(err);
        });
    });
    describe('Triangle', () => {
        it('should return an error message saying that there are too many text characters', () => {
            const text = 'ABCD';
            const colorText = 'white';
            const colorShape = '#00FF00';
            const shape = () => new Triangle(text, colorText, colorShape);
            const err = new Error('text must contain only up to three characters');
            expect(shape).toThrow(err);
        });
    });

    describe('Square', () => {
        it('should return an error message saying that there are too many text characters', () => {
            const text = 'SVGG';
            const colorText = 'white';
            const colorShape = 'blue';
            const shape = () => new Square(text, colorText, colorShape);
            const err = new Error('text must contain only up to three characters');
            expect(shape).toThrow(err);
        });
    });
});
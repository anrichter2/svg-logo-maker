const {Circle, Triangle, Square} = require('./shapes.js');
const { createSVG } = require('./svg.js')

// Test to check that function renderSVG() works properly
describe('renderSVG', () => {
    it('should return the full text that will be written to the SVG file', () => {
        const data = {
            text: 'SVG',
            colorText: 'white',
            shape: 'circle',
            colorShape: 'green'
        }
        expect(createSVG(data)).toEqual(`<svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">

  <circle cx="150" cy="100" r="80" fill="green" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

</svg>`)
    })
});
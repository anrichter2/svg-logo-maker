// Importing the Classes of shapes
const {Circle, Triangle, Square} = require('./shapes.js');


// Function for creating the text that will be written into the SVG file.
function createSVG(data) {
    let logo;
    if (data.shape == 'circle') {
        logo = new Circle(data.text, data.colorText, data.colorShape).render();
    } else if (data.shape == 'triangle') {
        logo = new Triangle(data.text, data.colorText, data.colorShape).render();
    } else if (data.shape == 'square') {
        logo = new Square(data.text, data.colorText, data.colorShape).render();
    }

    return `<svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">

  ${logo}

</svg>`
}

// Exporting the function
module.exports = {createSVG}
const {Circle, Triangle, Square} = require('./shapes.js');

function createSVG(data) {
    let logo;
    console.log(data.shape)
    if (data.shape == 'circle') {
        logo = new Circle(data.text, data.colorText, data.colorShape).render();
    } else if (data.shape == 'triangle') {
        logo = new Triangle(data.text, data.colorText, data.colorShape).render();
    } else if (data.shape == 'square') {
        logo = new Square(data.text, data.colorText, data.colorShape).render();
    }

    console.log(logo)

    return `<svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">

  ${logo}

</svg>`
}

module.exports = {createSVG}
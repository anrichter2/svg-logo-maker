// Parent Shape class
class Shape {
    constructor(text, colorText, colorShape) {
        this.text = text;
        this.colorText = colorText;
        this.colorShape = colorShape;
    }

    render() {
        throw new Error('child class must use a render() method.')
    }
}

//Child classes of Circle, Triangle, and Square
class Circle extends Shape {
    constructor(text, colorText, colorShape) {
        if(text.length > 3) {
            throw new Error('text must contain only up to three characters')
        }
        super(text, colorText, colorShape)
    }
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.colorShape}" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.colorText}">${this.text}</text>`
    }
}

class Triangle extends Shape {
    constructor(text, colorText, colorShape) {
        if(text.length > 3) {
            throw new Error('text must contain only up to three characters')
        }
        super(text, colorText, colorShape)
    }
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.colorShape}" />

  <text x="150" y="175" font-size="60" text-anchor="middle" fill="${this.colorText}">${this.text}</text>`
    }
}

class Square extends Shape {
    constructor(text, colorText, colorShape) {
        if(text.length > 3) {
            throw new Error('text must contain only up to three characters')
        }
        super(text, colorText, colorShape)
    }
    render() {
        return `<rect x="75" y="25" width="150" height="150" fill="${this.colorShape}" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.colorText}">${this.text}</text>`
    }
}

// Exporting the classes of shapes
module.exports = {Circle, Triangle, Square}
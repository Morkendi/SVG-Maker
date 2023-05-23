const Color2Hex = require('colornames');

class Shape {
    constructor({logoText, textColor, logoColor, logoShape}) {
        this.logoShape = logoShape;
        this.logoText = logoText;
        this.textColor = textColor;
        this.logoColor = logoColor;
    }

    emptyInput(input) {
        if (!input) {
            throw new Error('Input is empty');
        }
    }

    validTextInput(input) {
        this.emptyInput(input);

        if (input.length > 3) {
            throw new Error('Input cannot be more than 3 characters');
        }
    }

    validColorInput(input) {
        this.emptyInput(input);

        // Change CSS color names to lower case
        input = input.toLowerCase();

        if(!Color2Hex(input)) {
            throw new Error('Please enter a valid color name or HEX code');
        }
    }

    render() {
        throw new Error('Child shapes must implement render()');
    }
}

module.exports = Shape;
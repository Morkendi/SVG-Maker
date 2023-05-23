class Shape {
    constructor({logoText, textColor, logoColor, logoShape}) {
        this.logoShape = logoShape;
        this.logoText = logoText;
        this.textColor = textColor;
        this.logoColor = logoColor;
    }

    render() {
        throw new Error('Child shapes must implement render()');
    }
}

module.exports = Shape;
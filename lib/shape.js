class Shape {
    constructor({logoText, textColor, logoColor, logoShape}) {
        this.logoShape = logoShape;
        this.logoText = logoText;
        this.textColor = textColor;
        this.logoColor = logoColor;
    }

    render() {
        return 'All shapes must implement render()';
    }
}

module.exports = Shape;
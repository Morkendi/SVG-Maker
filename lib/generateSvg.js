const generateSVG = (shape) => {
    return `
    <svg width="300" height="200" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    ${shape.render()}
    <text
    x="50%"
    y="${shape.logoShape != 'triangle' ? '50%' : '40%'}"
    text-anchor="middle"
    fill = "${shape.textColor}"
    font-size = "2.3rem" letter-spacing = "2" dy=".3em">
    font-family = "sans-serif"> ${shape.logoname}
    </text>
    </svg>
    `;
};

module.exports = {generateSVG};
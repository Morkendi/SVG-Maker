const inquirer = require('inquirer');
const fs = require('fs');
const {generateSVG} = require ('./lib/generateSvg');
const {makeShape} = require ('./lib/makeShape');
const Color2Hex = require('colornames');

inquirer
    .prompt ([
        {
            type: 'input',
            name: 'logoText',
            message: 'Please enter the text of your logo (MAX 3 letters)',
            validate: (logoText) => {
                if (logoText.length <= 3) {
                    return true
                } else {
                    return 'Please enter a maximum of 3 letters';
                }
            },
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Please enter a text color keyword or a HEX code for the text color of your logo',
            validate: (textColor) => {
                if(!Color2Hex(textColor)) {
                    return 'Please enter a valid color name or HEX code';
                } else {
                    return true;
                }
            },
        },
        {
            type: 'input',
            name: 'logoColor',
            message: 'Please enter a color keyword or a HEX code for the background color of your logo',
            validate: (logoColor) => {
                if(!Color2Hex(logoColor)) {
                    return 'Please enter a valid color name or HEX code';
                } else {
                    return true;
                }
            },
        },
        {
            type: 'list',
            name: 'logoShape',
            message: 'Please select a shape for your logo',
            choices: ['circle', 'square', 'triangle'],
        },
    ])
    .then((data) => {
        const svgPath = './examples/logo.svg';
        const finalLogo = makeShape(data);

        // Generate SVG logo
        fs.writeFile(svgPath, generateSVG(finalLogo), (err) =>
        err ? console.log(err) : console.log('Successfully created logo!')
        );
    })
    .catch((err) => console.log(err));
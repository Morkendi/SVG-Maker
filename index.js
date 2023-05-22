const inquirer = require('inquirer');
const fs = require('fs');
const {generateSVG } = require ('./lib/generateSvg');
const {makeShape} = require ('./lib/makeShape');

inquirer
    .prompt ([
        {
            type: 'input',
            name: 'logoText',
            message: 'Please enter the text of your logo (MAX 3 letters)',
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Please enter a text color keyword or a HEX code for the text color of your logo',
        },
        {
            type: 'input',
            name: 'logoColor',
            message: 'Please enter a color keyword or a HEX code for the background color of your logo',
        },
        {
            type: 'list',
            name: 'logoShape',
            message: 'Please select a shape for your logo',
            choices: ['circle', 'square', 'triangle'],
        },
    ])
    .then((response) => {
        const svgPath = './dist/logo.svg';
        const finalLogo = makeShape(data);

        // Generate SVG logo
        fs.writeFile(svgPath, generateSVG(finalLogo), (err) =>
        err ? console.log(err) : console.log('Successfully created logo!')
        );
    })
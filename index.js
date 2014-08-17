'use strict';

var fs = require('fs');

module.exports = fs.readFileSync('static/emoji.txt') // load file with emojis
                 .toString() // change the input file to string
                 .trim() // remove whitechars at the end
                 .split('\n'); // turn into an Array

'use strict';

var fs = require('fs');

module.exports = fs.readFileSync('static/emoji.txt')
                 .toString()
                 .trim()
                 .split('\n');

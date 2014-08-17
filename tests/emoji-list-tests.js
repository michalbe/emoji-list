'use strict';

var assert = require('assert');
var emojiList = require('../');

// how many elements?
assert.equal(emojiList.length, 663);

// what is the first one?
assert.equal(emojiList[0], ':bowtie:');

// all the emojis have opening and closing colon
emojiList.forEach(function(emoji) {
  // opening
  assert.equal(emoji.indexOf(':'), 0);
  // closing
  assert.equal(emoji.lastIndexOf(':'), emoji.length-1);
});

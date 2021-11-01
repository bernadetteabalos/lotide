const assertArraysEqual = require('../assertArraysEqual');
const middle = require ('../middle')

assertArraysEqual([], middle([1,2]));
assertArraysEqual(middle(['hellow','goodbye','yellow']), ['goodbye']);
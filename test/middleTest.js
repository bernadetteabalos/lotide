const assert = require('chai').assert;
const middle = require ('../middle');

describe('#middle', () => {
  it("returns empty array for arrays with two or less elements", () => {
    assert.deepEqual(middle([1,2]), []);
  });

  it("returns middle element of array ['goodbye']", () => {
    assert.deepEqual(middle(['hellow','goodbye','yellow']), ['goodbye']);
  });
});

/*
const assertArraysEqual = require('../assertArraysEqual');
const middle = require ('../middle')

assertArraysEqual([], middle([1,2]));
assertArraysEqual(middle(['hellow','goodbye','yellow']), ['goodbye']);
*/
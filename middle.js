const eqArrays = function(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  }
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(arrayOne, arrayTwo) {
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      console.log(`🛑🛑🛑 Assertion Failed: ${arrayOne} !== ${arrayTwo}`);
      return;
    }
  }
  console.log(`✅✅✅ Assertion Passed: ${arrayOne} === ${arrayTwo}`);
};


const middle = function(array) {
  let output = [];
  if (array.length <= 2) {
    return [];
  } else if (array.length % 2 === 0) {
    let x = array.length / 2;
    output.push(array[x - 1]);
    output.push(array[x]);
    return output;
  } else if (array.length % 2 !== 0) {
    let y = array.length / 2;
    output.push(array[Math.floor(y)]);
    return output;
  }
};
// array.length <= 2
// return empty array

// array.length % 2 === 0
// x = array.length / 2, x + 1

// array.length % 2 !== 0
// array.length / 2 -- math.floor()

// TEST CODE

assertArraysEqual([], middle([1, 2]));
assertArraysEqual(['goodbye'], middle(['hellow','goodbye','yellow']));
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
  if (eqArrays(arrayOne, arrayTwo)) {
    console.log(`✅✅✅ Assertion Passed: ${arrayOne} === ${arrayTwo}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arrayOne} !== ${arrayTwo}`);
  }
  return;
};

const flatten = function(array) {
  let flattened = [];
  for (let i = 0; i < array.length; i++) {
    let c = array[i];
    if (Array.isArray(c)) {
      flattened = flattened.concat(flatten(c));
    } else {
      flattened.push(c);
    }
  }
  return flattened;
};

console.log(flatten([1, 2, [3, 4], 5, [6]]));


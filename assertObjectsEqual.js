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

const eqObjects = function(object1, object2) {
  let p = Object.keys(object1);
  let m = Object.keys(object2);
  if (p.length !== m.length) {
    return false;
  }
  for (const element of p) {
    if (Array.isArray(object1[element]) && Array.isArray(object2[element])) {
      let x = eqArrays(object1[element], object2[element]);
      return x;
    } else if (object1[element] !== object2[element]) {
      return false;
    }
  }
  return true;
};

const assertObjectsEqual = function(object1, object2) {
  const inspect = require('util').inspect;
  let p = Object.keys(object1);
  let m = Object.keys(object2);
  if (p.length !== m.length) {
    return false;
  }
  for (const element of p) {
    let x = object1[element];
    let y = object2[element];
    if ((typeof x === 'object' && typeof y === 'object') && !eqObjects(x,y) || !(typeof x === 'object' && typeof y === 'object') && x !== y) {
      console.log(`🛑🛑🛑 Assertion Failed: ${inspect(object1)}) !== ${inspect(object2)}`);

    }
  }
  console.log(`✅✅✅ Assertion Passed: ${inspect(object1)}) === ${inspect(object2)}`);
  return;
};

assertObjectsEqual({a:1, b:2}, {a:1, b:2});

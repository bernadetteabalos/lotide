const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log (`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
  return;
};

const eqObjects = function(object1, object2) {
  let p = Object.keys(object1)
  let m = Object.keys(object2)
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

const ab = { a: "1", b: "2"};
const ba = { b: "2", a: "1"};
assertEqual(eqObjects(ab, ba), true)

const abc = { a: "1", b: "2", c: "3"};
assertEqual(eqObjects(ab, abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false
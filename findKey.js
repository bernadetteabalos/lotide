const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(object, callback) {
  let returnedKeys = Object.keys(object);
  for (const key of returnedKeys) {
    if (callback(object[key])) {
      return key;
    }
  }
};

let testOne = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2); // => "noma"

let testTwo = findKey({
  "Pepperoni Pizza": { pepCount: 10, pineappleCount: 0 },
  "Pineapple Pizza": { pineappleCount: 10, pepCount: 0}
}, x => x.pineappleCount === 10);

assertEqual(testOne, "noma");
assertEqual(testTwo, "Pineapple Pizza");


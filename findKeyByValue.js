const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log (`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
  return;
};

const findKeyByValue = function(object, value) {
  let returnedKeys = Object.keys(object);
  for (const category of returnedKeys) {
    if (value === object[category]) {
      return category;
    }
  }
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

const menuItems = {
  beverage: "Coffee",
  food: "Omelette",
  sauce: "Chipotle",
}

assertEqual(findKeyByValue(menuItems, "Chipotle"), "sauce");

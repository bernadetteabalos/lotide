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

const without = function(source, itemsToRemove) {
  let newArray = source.slice(); 
  // let newArray2 = [...source]
  for (let i = 0; i < newArray.length; i++) {
    for (let x = 0; x < itemsToRemove.length; x++) {
      if (newArray[i] === itemsToRemove[x]) {
        newArray.splice(i, 1);
      }
    }
  }
  return newArray;
};

let original = [3,4,5]
console.log(without(original, [4]));
assertArraysEqual([3,4], without(original, [5,2]));

console.log(original);

assertArraysEqual(["1","2"], without(["1", "2", "3"], [1, 2, "3"]))
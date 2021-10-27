const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log (`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
  return;
};

const countLetters = function(sentence) {
  let result = {}
  let count = 0
  for (const letter of sentence) {
    if (letter !== " ") {
      if (result[letter]) {
          result[letter] += 1;
        } else {
          result[letter] = 1;
        }
    }  
  }
  return result;
}

let y = countLetters("boom");
console.log(countLetters("boom"));
assertEqual(y["b"], 1);
assertEqual(y["o"], 2);
assertEqual(y["m"], 1);

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

module.exports = middle;
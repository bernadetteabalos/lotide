const takeUntil = function(array, callback) {
  
  let p = [];
  for (let element in array) {
    if (callback(array[element])) {
      break;
    } else {
      p.push(array[element]);
    }
  }
  return p;
};

//array.slice(0, element)

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

/* should output :
[ 1, 2, 5, 7, 2 ]
---
[ 'I\'ve', 'been', 'to', 'Hollywood' ]
*/

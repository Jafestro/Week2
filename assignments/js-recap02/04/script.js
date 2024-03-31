'use strict';

function sortArray(numbers) {
  const sorted = [].concat(numbers);
  sorted.sort();
  return sorted;
}


const numbers = [0,0,1,2,2,3,5,4,8, 7];


console.log(numbers);
console.log(sortArray(numbers));

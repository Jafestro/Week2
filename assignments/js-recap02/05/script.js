'use strict';

function sortArray(numbers, order) {
  const sorted = [].concat(numbers);
  switch (order) {
    case 'asc':
      sorted.sort();
      break;
    case 'desc':
      sorted.sort();
      sorted.reverse();
      break;
  }
  return sorted;
}

const numbers = [5, 2, 8, 1, 9];

console.log(sortArray(numbers, 'asc')); // Output: [1, 2, 5, 8, 9]
console.log(sortArray(numbers, 'desc')); // Output: [9, 8, 5, 2, 1]

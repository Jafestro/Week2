'use strict';

function askNumber() {
  let number;
  do {
    number = parseInt(prompt('Enter a positive number'));
    if (number < 0) {
      alert('Number should be positive');
    }
  } while (number < 0);
  return number;
}

let sum = 0;
const number = askNumber();
for (let i = 1; i <= number; i++) {
  sum += i;
}

document.querySelector('body').innerHTML = 'Sum of the natural numbers' +
  ' is ' + sum;

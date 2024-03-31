'use strict';

const numbers = [];
while (true) {
  const number = prompt('Enter a number(Enter nothing to quit');
  if (number.length === 0) {
    break;
  }
  numbers.push(parseInt(number));
}

let html = 'Even Numbers:';
let flag = true;

for (const number of numbers) {
  if (number % 2 === 0) {
    html += ` ${number}`;
    flag = false;
  }
}

if (flag) {
  html += ' None';
}

document.querySelector('body').insertAdjacentHTML('beforebegin',
    html);

console.log('Program finished executing');

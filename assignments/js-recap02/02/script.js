'use strict';

const numbers = [];

for (let i = 0; i < 5; i++) {
  numbers.push(parseFloat(prompt('Enter a number')));
}
console.log('Numbers:');
for (const number of numbers) {
  console.log(number);
}
alert("Let's check if the number you enter is in the array");
if (numbers.includes(parseFloat(prompt('Enter number')))) {
  console.log('Number is found');
} else {
  console.log('Number not found');
}

numbers.pop();
console.log('Numbers Updated:');
for (const number of numbers) {
  console.log(number);
}
numbers.sort();

console.log('Numbers Sorted:');
for (const number of numbers) {
  console.log(number);
}

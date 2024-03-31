'use strict';

const fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi'];

console.log('Fruits:');
for (const fruit of fruits) {
  console.log(fruit);
}
document.querySelector('body').insertAdjacentHTML('beforebegin',
    `Fruits array's size is ${fruits.length}<br>`);

console.log('Second element in the fruits array ' + fruits[2]);

console.log('The last element in the fruits array ' +
   fruits[fruits.length - 1]);

const vegetables = [];

for (let i = 0; i < 3; i++) {
  const veggies = prompt('Enter a vegetable');
  vegetables.push(veggies);
}

console.log('Vegetables:');
for (const vegetable of vegetables) {
  console.log(vegetable);
}

document.querySelector('body').insertAdjacentHTML('afterend',
    `Vegetables array's size is ${vegetables.length}`);

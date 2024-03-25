'use strict';

const s1 = parseFloat(prompt('Enter Triangle side 1'));
const s2 = parseFloat(prompt('Enter Triangle side 2'));
const s3 = parseFloat(prompt('Enter Triangle side 3'));

if (s1 === s2 && s2 === s3) {
  document.querySelector('body').innerHTML = 'equilateral triangle ' +
    '(all sides are equal)';
} else if (s1 === s2 && s2 !== s3 || s2 === s3 && s2 !== s1) {
  document.querySelector('body').innerHTML = 'isosceles  triangle' +
    '(two sides are equal)';
} else if (s1 !== s2 && s2 !== s3 && s1 !== s3) {
  document.querySelector('body').innerHTML = 'scalene triangle' +
    '(no sides are equal)';
}

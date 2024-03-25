'use strict';

const x1 = parseFloat(prompt('Enter x1 value'));
const y1 = parseFloat(prompt('Enter y1 value'));
const x2 = parseFloat(prompt('Enter x2 value'));
const y2 = parseFloat(prompt('Enter y2 value'));

const distance = Math.sqrt(((x2 - x1)^2 + (y2 - y1)^2));

const p = document.createElement('p');
p.innerHTML = `Distance between (${x1},${y1}) and (${x2},${y2})
  is ${distance.toPrecision(3)}`;
document.querySelector('body').append(p);

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

const positiveNumber = askNumber();
let html = '';
for (let i = 1; i <= positiveNumber; i++) {
  html += '<tr>';
  for (let j = 1; j <= positiveNumber; j++) {
    html += `<td>${i*j}</td>`;
  }
  html += '</tr>';
}

document.querySelector('#target').innerHTML = html;



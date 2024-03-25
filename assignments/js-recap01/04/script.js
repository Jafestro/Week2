'use strict';

const score = parseInt(prompt('Enter your ' +
  'score for a course assessment'));

if (score >= 0 && score <= 39) {
  console.log('0');
  document.querySelector('body').innerHTML = 'Grade is 0';
} else if (score >= 40 && score <= 51) {
  document.querySelector('body').innerHTML = 'Grade is 1';
} else if (score >= 52 && score <= 63) {
  document.querySelector('body').innerHTML = 'Grade is 2';
} else if (score >= 64 && score <= 75) {
  document.querySelector('body').innerHTML = 'Grade is 3';
} else if (score >= 76 && score <= 87) {
  document.querySelector('body').innerHTML = 'Grade is 4';
} else if (score >= 88 && score <= 100) {
  document.querySelector('body').innerHTML = 'Grade is 5';
} else {
  document.querySelector('body').innerHTML = 'There is no grade for ' +
    'that score';
}


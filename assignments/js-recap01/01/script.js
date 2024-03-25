'use strict';

const celsius = prompt( 'Enter temperature in Celsius °');

const fahrenheit = (celsius * 9/5) + 32;
const kelvin = parseInt(celsius) + 273.15;

const p = document.createElement('p');

p.innerHTML = `Fahrenheit:  ${fahrenheit} ° F <br> Kelvin: ${kelvin} ° K`;
document.querySelector('body').append(p);

'use strict';

const targetElement = document.getElementById('target');
const currentDate = new Date().toLocaleDateString('fi-FI', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
});


appendInfoToTarget('Browser: ' + getBrowserInfo().browser);
appendInfoToTarget('Version: ' + getBrowserInfo().version);
appendInfoToTarget('OS: ' + getBrowserInfo().os);
appendInfoToTarget('Screen width and height: ' +
  screen.width + 'x' + screen.height);
appendInfoToTarget('Available screen space for the browser: ' +
  window.innerWidth + 'x' + window.innerHeight);
appendInfoToTarget('Current Date and Time: ' + currentDate);



function appendInfoToTarget(info) {
  var pElement = document.createElement('p');
  pElement.textContent = info;
  targetElement.appendChild(pElement);
}


function getBrowserInfo() {
  const userAgent = navigator.userAgent;

  let browser = '';
  let version = '';
  let os = '';

  if (userAgent.indexOf('Chrome') > -1) {
    browser = 'Chrome';
    version = userAgent.substring(userAgent.indexOf('Chrome') + 7).split(' ')[0];
  } else if (userAgent.indexOf('Firefox') > -1) {
    browser = 'Firefox';
    version = userAgent.substring(userAgent.indexOf('Firefox') + 8).split(' ')[0];
  } else if (userAgent.indexOf('Safari') > -1) {
    browser = 'Safari';
    version = userAgent.substring(userAgent.indexOf('Version') + 8).split(' ')[0];
  } else if (userAgent.indexOf('OP') > -1) {
    browser = 'Opera';
    version = userAgent.substring(userAgent.indexOf('OP') + 3).split(' ')[0];
  } else if (userAgent.indexOf('MSIE') > -1 || userAgent.indexOf('rv:') > -1) {
    browser = 'Internet Explorer';
    version = userAgent.substring(userAgent.indexOf('MSIE') + 5).split(';')[0];
  }
  // Operating System detection
  if (userAgent.indexOf('Win') > -1) {
    os = 'Windows';
  } else if (userAgent.indexOf('Mac') > -1) {
    os = 'Mac OS';
  } else if (userAgent.indexOf('Linux') > -1) {
    os = 'Linux';
  } else if (userAgent.indexOf('iPhone') > -1 || userAgent.indexOf('iPad') > -1) {
    os = 'iOS';
  } else if (userAgent.indexOf('Android') > -1) {
    os = 'Android';
  } else {
    os = 'Unknown';
  }

  return { browser, version, os };
}


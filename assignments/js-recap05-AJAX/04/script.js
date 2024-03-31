'use strict';

async function fetchData(url, options) {
  try {
    const response = await fetch(url, options);
    if (response.status > 299 || response.status < 200) {
      throw new Error('Response ' + options.method + ' not successfull');
    }
    const data = response.json();
    console.log(options.method + ' request successfull');
    console.log(data);
  } catch (error) {
    console.error('FECTH_NOT_SUCCESSFULL');
  }
}

const user = {
  name: 'John Doe',
  job: 'Developer',
};
const url = 'https://reqres.in/api/nonexistent'; // Using a nonexistent URL
const options = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(user),
};
fetchData(url, options);


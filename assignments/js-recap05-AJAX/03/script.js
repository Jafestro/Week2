'use strict';

// Function to make a GET request
async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log('GET request successful:', data);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Function to make a POST request
async function postData(url, data) {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const responseData = await response.json();
    console.log('POST request successful:', responseData);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Function to make a PUT request
async function putData(url, data) {
  try {
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const responseData = await response.json();
    console.log('PUT request successful:', responseData);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Function to make a DELETE request
async function deleteData(url) {
  try {
    const response = await fetch(url, {
      method: 'DELETE'
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    console.log('DELETE request successful');
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Testing error handling for GET request
fetchData('https://reqres.in/api/unknown/23');

// Testing error handling for POST request
postData('https://reqres.in/api/unknn', { name: 'John', job: 'Developer' });

// Testing error handling for PUT request
putData('https://reqres.in/api/unknown3', { name: 'Jane', job: 'Designer' });

// Testing error handling for DELETE request
deleteData('https://reqres.in/api/unknow');


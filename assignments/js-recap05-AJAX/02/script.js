'use strict';


async function postMethod() {
  console.log('asynchronous download begins');
  try {
    const user = {
      name: 'John Krasinksi',
      job: 'Accountant',
    };
    const url = 'https://reqres.in/api/users';
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    };
    const response = await fetch(url, options);
    const userData = await response.json();
    console.log(userData);
  } catch (error) {
    console.log(error.message);
  } finally {
    console.log('asynchronous load complete');
  }
}

postMethod();

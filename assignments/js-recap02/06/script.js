'use strict';

const movies = [];

function addMovie(name, rate) {
  movies.push(
      {
        title: name,
        rating: rate
      }
  );
}

function sortMovies(movies) {
  movies.sort((a, b) => b.rating - a.rating);
}

const count = parseInt(prompt('Enter the number of movies you' +
  ' want to rate'));

for (let i = 0; i < count; i++) {
  const name = prompt("Movie's name: ");
  const rating = parseFloat(prompt('Rating'));
  addMovie(name, rating);
}

sortMovies(movies);

const highestRatedNode = document.createElement('h2');
highestRatedNode.innerText = `Highest rated movie ${movies[0].title}
${movies[0].rating}/5`;

const listNode = document.createElement('ol');
for (let i = 0; i < movies.length; i++) {
  const listElemNode = document.createElement('li');
  listElemNode.textContent = movies[i].title + ' ' + movies[i].rating + '/5';
  listNode.append(listElemNode);
}

document.querySelector('body').append(highestRatedNode, listNode);

async function makeFetch(url, options) {
  const result = await fetch(url, options);
  const json = await result.json();
  return json;
}


async function fetchDailyMenu(id, language) {
  try {
    const array = await makeFetch(`https://10.120.32.94/restaurant/api/v1/restaurants/daily/${id}/${language}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return array;
  } catch (error) {
    console.error('Error fetching daily menu:', error);
    throw error;
  }
}

async function fetchRestaurants() {
  try {
    const array = await makeFetch('https://10.120.32.94/restaurant/api/v1/restaurants', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return array;
  } catch (error) {
    console.error('Error fetching restaurants:', error);
    throw error;
  }
}


let myLocation = [];

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(handlePosition);
} else {
  console.log('Geolocation is not supported in this browser');
}

const dialogNode = document.querySelector('dialog');

async function handlePosition(position) {
  const array = await fetchRestaurants();
  myLocation = [position.coords.longitude, position.coords.latitude];
  sortByDistance(array, myLocation);
  console.log("Sorted array:", array); // Check if array is sorted correctly

  const table = document.querySelector('table');

  array.forEach((restaurant, index) => {
    const row = table.insertRow();
    const nameCell = row.insertCell();
    const addressCell = row.insertCell();
    nameCell.textContent = restaurant.name;
    addressCell.textContent = restaurant.address;
    row.classList.add('row');
    row.addEventListener('click', async (e) => {
      e.preventDefault();
      console.log("Row clicked:", restaurant); // Check if correct restaurant is clicked

      const highlightedRows = document.querySelectorAll('.highlight');

      highlightedRows.forEach((hRow) => {
        hRow.classList.remove('highlight');
      });
      row.classList.add('highlight');
      dialogNode.innerHTML = '';
      const contentNode = document.createElement('div');
      contentNode.classList.add('content');
      const infoNode = document.createElement('div');
      infoNode.classList.add('info');
      const deleteNode = document.createElement('div');
      deleteNode.classList.add('deleteButton');
      appendInfoToElement('❌', deleteNode);
      appendInfoToElement(`Name: ${restaurant.name}`, infoNode);
      appendInfoToElement(`Address: ${restaurant.address}`, infoNode);
      appendInfoToElement(`Postal Code: ${restaurant.postalCode}`, infoNode);
      appendInfoToElement(`City: ${restaurant.city}`, infoNode);
      appendInfoToElement(`Phone Number: ${restaurant.phone}`, infoNode);
      appendInfoToElement(`Company: ${restaurant.company}`, infoNode);

      const xButtonNode = deleteNode
        .querySelectorAll('p').item(0);

      xButtonNode.addEventListener('click',
        (e) => {
          e.preventDefault();
          dialogNode.close();
        },
      );
      xButtonNode.classList.add('closeButton');

      const menuNode = document.createElement('div');
      menuNode.classList.add('menu');
      const menuArray = await fetchDailyMenu(restaurant._id, 'en');
      console.log("Menu Array:", menuArray); // Check menu array content
      if (menuArray.courses.length !== 0) {
        menuArray.courses.forEach((meal) => {
          appendInfoToElement(`Meal: ${meal.name}`, menuNode, true);
          appendInfoToElement(`Price: ${meal.price}`, menuNode);
          appendInfoToElement(`Diet: ${meal.diets}`, menuNode);
        });
      } else {
        appendInfoToElement('No Menu Found', menuNode, true); // Display a message for no menu found
      }
      contentNode.append(infoNode, menuNode);
      dialogNode.append(deleteNode, contentNode);
      dialogNode.showModal();
    });
  });
}


function appendInfoToElement(info, element, bold = false) {
  const pElement = document.createElement('p');
  pElement.textContent = info;
  if (bold) {
    pElement.style.fontWeight = 'bold';
  }
  element.append(pElement);
}

function sortByDistance(array, myLocation) {
  array.sort((a, b) => calculateDistance(myLocation, a.location.coordinates) -
    calculateDistance(myLocation, b.location.coordinates));
}

function calculateDistance(coordinates1, coordinates2) {
  return Math.sqrt(Math.pow(coordinates2[0] - coordinates1[0], 2) + Math.pow(coordinates2[1] - coordinates1[1], 2));
}

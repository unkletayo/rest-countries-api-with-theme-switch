const filter = document.getElementById('active-filter').innerHTML;
const holder = document.getElementById('card-holder');
const dropdown = document.getElementById('dropdown');
const options = document.getElementById('filter-options');
const option = options.children;
const filterIcon = document.getElementById('filter-icon');

// const optionContainer = document.querySelectorAll('.option-container');

const apiURL =
  'https://restcountries.eu/rest/v2/all?fields=name;capital;population;region;flag';

async function initialLoad() {
  const res = await fetch(`${apiURL}`);
  const data = await res.json();
  // console.log(data);

  data.forEach((item) => {
    let itemsTemplate = `<div class="card" onclick="openDetails(this.children[1].firstElementChild)">
    <img src=${item.flag} alt="flag">
    <div class="card-content">
      <h1>${item.name}</h1>
      <p>Population: <span>${item.population}</span></p>
      <p>Region: <span>${item.region}</span></p>
      <p>Capital: <span>${item.capital}</span></p>
    </div>
  </div>`;

    let html = document.getElementById('card-holder');
    html.innerHTML += itemsTemplate;
  });
  document.getElementById('card-loader').style.display = 'none';
  document.getElementById('card-holder').style.display = 'flex';
}

function toggleDropDown() {
  if (options.style.display == 'flex') {
    options.style.display = 'none';
    filterIcon.style.transform = 'rotate(0deg)';
  } else {
    options.style.display = 'flex';
    filterIcon.style.transform = 'rotate(180deg)';
  }
}

initialLoad();

// Drop down
dropdown.addEventListener('click', toggleDropDown);
// Serach By continent


document.addEventListener('DomContentLoaded', initialLoad);

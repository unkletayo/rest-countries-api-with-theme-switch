// Modal
const countriesEl = document.getElementById('countries');
const toggleBtn = document.getElementById('toggle');
const filterBtn = document.getElementById('filter');
const regionFilters = filterBtn.querySelectorAll('li');
const searchEl = document.getElementById('search');
const modal = document.getElementById('modal');
const closeBtn = document.getElementById('close');

// toggle theme - dark & light
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

getCountries();

async function getCountries() {
  const res = await fetch('https://restcountries.eu/rest/v2/all');
  const countries = await res.json();

  displayCountries(countries);
}

const displayCountries = (countries) => {
  countriesEl.innerHTML = '';

  countries.forEach((country) => {
    const countryEl = document.createElement('div');
    countryEl.classList.add('card');

    countryEl.innerHTML = `
            <div>
                <img src="${country.flag}" alt="${country.name}" />
            </div>
            <div class="card-body">
                <h3 class="country-name">${country.name}</h3>
                <p>
                    <strong>Population:</strong>
                    ${country.population}
                </p>
                <p class="country-region">
                    <strong>Region:</strong>
                    ${country.region}
                </p>
                <p>
                    <strong>Capital:</strong>
                    ${country.capital}
                </p>
            </div>
        `;

    countryEl.addEventListener('click', () => {
      modal.style.display = 'flex';
      showCountryDetails(country);
    });

    countriesEl.appendChild(countryEl);
  });
};

const showCountryDetails = (country) => {
  const modalBody = modal.querySelector('.modal-body'),
    modalImg = modal.querySelector('img');

  modalImg.src = country.flag;
  modalBody.innerHTML = `
  <h2>${country.name}</h2>
  <p>
     <strong>Native Name:</strong>
      ${country.nativeName}
  </p>

  <p>
  <strong>Population:</strong>
   ${country.population}
  </p>

  <p>
  <strong>Region:</strong>
   ${country.region}
</p>

<p>
  <strong>Sub Region:</strong>
  ${country.subregion}
</p>
<p>
  <strong>Capital:</strong>
  ${country.capital}
</p>
<p>
  <strong>Top Level Domain:</strong>
  ${country.topLevelDomain[0]}
</p>
<p>
<strong>Currencies:</strong>
${country.currencies.map((currency) => currency.code)}
</p>
<p>
<strong>Languages:</strong>
${country.languages.map((language) => language.name)}
</p>
  `;
};

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

searchEl.addEventListener('click', () => {
  const { value } = e.target;
  const nameOfConttry = document.querySelectorAll('.country-name');
});

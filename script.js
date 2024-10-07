const apiEndpoint = '(link unavailable)';
const apiKey = 'YOUR_API_KEY';

const locationElement = document.getElementById('location');
const temperatureElement = document.getElementById('temperature');
const descriptionElement = document.getElementById('description');

fetch(`${apiEndpoint}?q=London&units=metric&appid=${apiKey}`)
  .then(response => response.json())
  .then(data => {
    locationElement.textContent = data.name;
    temperatureElement.textContent = `${data.main.temp}°C`;
    descriptionElement.textContent = data.weather[0].description;
  })
  .catch(error => console.error(error));


document.getElementById('getWeatherBtn').addEventListener('click', () => {
  const city = document.getElementById('cityInput').value;
  getWeather(city);
});

async function getWeather(city) {
  try {
      const apiKey = ''; // Set your API key here
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&lang=de&units=metric`);
      const data = await response.json();
      displayWeather(data);
  } catch (error) {
      console.error('Fehler beim Abrufen der Wetterdaten', error);
  }
}

function displayWeather(data) {
  const weatherDiv = document.getElementById('weatherResult');
  weatherDiv.innerHTML = `
      <h2>Wetter in ${data.name}</h2>
      <p>Temperatur: ${data.main.temp} °C</p>
      <p>Zustand: ${data.weather[0].description}</p>
  `;
}

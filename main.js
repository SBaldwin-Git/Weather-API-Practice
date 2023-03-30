/**
 * api object ref
 * hourly > time > each hour is save in the array e.g 0-23 is 24 hours
 * hourley > temperature_m is the same but the relevant temp for the hour
 */

//Big header value
const headerCurrentTemp = document.querySelector(".header-current-temp");
//Small header value
const headerCurrentTempHigh = document.querySelector(".current-temp-high");
const headerCurrentTempLow = document.querySelector(".current-temp-low");
//Wind and humidity
const headerCurrentWind = document.querySelector(".current-wind");
const headerCurrentHumidity = document.querySelector(".current-humidity");

//Get current time and convert to iso8601 format
const date = new Date();
const isoDate = date.toISOString();

async function getWeather() {
  const response = await fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=51.51&longitude=-0.13&hourly=temperature_2m&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_probability_max,windspeed_10m_max&windspeed_unit=mph&timezone=Europe%2FLondon"
  );
  const data = await response.json();
  setTemp(data);
  setWindAndHumidity(data);
}

//Set current High and Low Temp using data passed from getWeather() function
function setTemp(data) {
  headerCurrentTempHigh.textContent = `${data.daily.temperature_2m_max[0]}${data.daily_units.temperature_2m_max}`;
  headerCurrentTempLow.textContent = `${data.daily.temperature_2m_min[0]}${data.daily_units.temperature_2m_min}`;
}

//Set wind and humidity using data passed from getWeather() function
function setWindAndHumidity(data) {
  headerCurrentWind.textContent = `${data.daily.windspeed_10m_max[0]} ${data.daily_units.windspeed_10m_max}`;
  headerCurrentHumidity.textContent = `${data.daily.precipitation_probability_max[0]}${data.daily_units.precipitation_probability_max}`;
}

getWeather();

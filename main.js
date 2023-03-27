//Fetch weather api https://api.open-meteo.com/v1/forecast?latitude=51.51&longitude=-0.13&hourly=temperature_2m
//save all heading elements to const vatriables

const temp = document.querySelector('h1');
const time = document.querySelector('h2');

async function getWeather() {
    const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=51.51&longitude=-0.13&hourly=temperature_2m');
    const data = await response.json();
    console.log(data);

    temp.textContent = `The temperature in London was ${data.hourly.temperature_2m[12]}${data.hourly_units.temperature_2m}.`;
    time.textContent = `On the 27th of March 2023 at ${data.hourly.time[12].substr(-5)}.`;
}

getWeather();

/**
 * api object ref
 * hourly > time > each hour is save in the array e.g 0-23 is 24 hours
 * hourley > temperature_m is the same but the relevant temp for the hour
 */
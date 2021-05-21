//05f65b429bc2f61217f1bf2a34083316
const API_KEY = '05f65b429bc2f61217f1bf2a34083316';

const windchill = document.querySelector(".windchill > span");
const windspeen = document.querySelector(".windspeed > span");
const weatherDisplay = document.querySelector(".weather > img");
const locationDisplay = document.querySelector(".location");
const temperatureDisplay = document.querySelector(".temperature > span");
const weatherSelect = document.querySelector("#weather-select");
const info = document.querySelector(".info");


const getWeather = async( city = "seoul" )=> {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
  const response = await axios.get(url);
  const {name, main, weather, wind} = response.data;
  locationDisplay.innerText = name;
  temperatureDisplay.innerText = transferTemperature(main.temp);
  weatherDisplay.setAttribute('src', `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`);
  windchill.innerText = transferTemperature(main.feels_like);
  windspeen.innerText = wind.speed;
  console.log(response, name);
}

//"http://openweathermap.org/img/wn/01n@2x.png"

const transferTemperature = (temp) => {
  return (temp-273.15).toFixed(1);
}

weatherSelect.addEventListener("change", (e) => {
  getWeather(e.target.value);
});

getWeather();

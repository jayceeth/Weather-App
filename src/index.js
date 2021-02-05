function formatDate() {
  let currentDateTime = new Date();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[currentDateTime.getDay()];
  let hours = currentDateTime.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = currentDateTime.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${day} ${hours}:${minutes}`;
}

let changeDateTime = document.querySelector("#date");
changeDateTime.innerHTML = formatDate(changeDateTime);

function displayCurrentTemp(response){
    let tempElement = document.querySelector("#temperature");
    let cityElement = document.querySelector("#current-city");
    let humidityElement = document.querySelector("#humidity");
    let windElement = document.querySelector("#wind");
    let descriptionElement = document.querySelector("#description");
    let iconElement = document.querySelector("#icon");

    imperialTemp = response.data.main.temp
    tempElement.innerHTML = Math.round(imperialTemp);
    cityElement.innerHTML = response.data.name;
    humidityElement.innerHTML = response.data.main.humidity;
    windElement.innerHTML = Math.round(response.data.wind.speed);
    descriptionElement.innerHTML = response.data.weather[0].description;
    iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  iconElement.setAttribute("alt", response.data.weather[0].description);
}


function searchCity(city){
    let apiKey = "f0229aa4803b78f326fa1951e4c8d9a5";
    let apiURL =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`
    axios.get(apiURL).then(displayCurrentTemp);
}

function handleSubmit(event) {
  event.preventDefault();
  let cityInputElement = document.querySelector("#city-input");
  searchCity(cityInputElement.value);
}

function displayMetricTemp(event){
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  metricLink.classList.add("active");
  imperialLink.classList.remove("active");
  let metricTemp = (imperialTemp-32)* 5/9;
  temperatureElement.innerHTML = Math.round(metricTemp);
}

function displayImperialTemp(event){
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  metricLink.classList.remove("active");
  imperialLink.classList.add("active");
  temperatureElement.innerHTML = Math.round(imperialTemp);
}

let imperialTemp = null;

let searchBox = document.querySelector("#search-form");
searchBox.addEventListener("submit", handleSubmit);



let imperialLink = document.querySelector("#imperial-link");
imperialLink.addEventListener("click", displayImperialTemp);

let metricLink = document.querySelector("#metric-link");
metricLink.addEventListener("click", displayMetricTemp);





searchCity("San Francisco");
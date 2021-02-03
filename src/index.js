
function displayCurrentTemp(response){
    console.log(response);
    let tempElement = document.querySelector("#temperature");
    let cityElement = document.querySelector("#current-city");
    let humidityElement = document.querySelector("#humidity");
    let windElement = document.querySelector("#wind");
    let descriptionElement = document.querySelector("#description");
    tempElement.innerHTML = Math.round(response.data.main.temp);
    cityElement.innerHTML = response.data.name;
    humidityElement.innerHTML = response.data.main.humidity;
    windElement.innerHTML = Math.round(response.data.wind.speed);
    descriptionElement.innerHTML = response.data.weather[0].description;
}


let apiKey = "f0229aa4803b78f326fa1951e4c8d9a5";
let city = "San Francisco"
let apiURL =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`
axios.get(apiURL).then(displayCurrentTemp)
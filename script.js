const apiKey = "3c3582d0e16b37eec497287def5e6fac";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city) {
    const response = await fetch(apiURL + city + `&appid=${apiKey}`) 
    var data = await response.json();

    console.log(data);
    
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + `°C`;
    document.querySelector('.humidity').innerHTML = data.main.humidity + `%`;
    document.querySelector('.wind').innerHTML = data.wind.speed + ` km/hr`;
    

    if (data.weather[0].main == 'Clouds') {
        weatherIcon.src = 'weather-app-img/images/clouds.png'
    }
    else if (data.weather[0].main == 'Clear') {
        weatherIcon.src = 'weather-app-img/images/clear.png'
    }
    else if (data.weather[0].main == 'Mist') {
        weatherIcon.src = 'weather-app-img/images/mist.png'
    }
    else if (data.weather[0].main == 'Snow') {
        weatherIcon.src = 'weather-app-img/images/snow.png'
    }
    else if (data.weather[0].main == 'Rain') {
        weatherIcon.src = 'weather-app-img/images/rain.png'
    }

    document.querySelector(".weather").style.display = 'block'


}

searchBtn.addEventListener('click', function(){
    checkWeather(searchBox.value)
})
searchBox.addEventListener('keypress', function(event){
    if (event.key === 'Enter') {
        checkWeather(searchBox.value);
    }
});

checkWeather()
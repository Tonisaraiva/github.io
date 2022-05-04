let button = document.querySelector(".button")
let inputValue = document.querySelector(".inputValue")
let name = document.querySelector(".name")
let description = document.querySelector(".description")
let temperature = document.querySelector(".temperature")


async function getWeather(){

    let response = await fetch("https://community-open-weather-map.p.rapidapi.com/forecast/daily?q=san%20francisco%2Cus&lat=35&lon=139&cnt=10&units=metric%20or%20imperial", {
      headers: {
        'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com',
        'X-RapidAPI-Key': '727e08c480msh9b9088d53e375bep189ddfjsn01220a09870a'
      },
    });
    let data = await response.json();
    
console.log(data)


}

getWeather()




button.addEventListener("click", getWeather)

let searchValue = document.querySelector(".search")
let searchBtn = document.querySelector(".searchBtn")
let city = document.querySelector(".cityName")
let degree = document.querySelector(".degree")
let clds = document.querySelector(".clouds")
let form = document.querySelector("form")
let minTemp = document.querySelector(".min-temp")
let maxTemp = document.querySelector(".max-temp")
let time = document.querySelector(".getTime")

window.addEventListener("DOMContentLoaded",()=>{
    fetchWeatherApi("Chennai")
})

searchBtn.addEventListener("click",(e)=>{
    e.preventDefault()
    fetchWeatherApi(searchValue.value)
})

function fetchWeatherApi(inputValue){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=2c6823df05f8bb675e7f4e01e7870081`)
    .then(getData => getData.json())
    .then(SignleDetail => {
        city.innerText = SignleDetail.name
        degree.innerHTML = `${Math.floor(SignleDetail.main.temp - 273)}<span>${"&#176"}</span><span>${"C"}</span>`;
        clds.src = `https://api.openweathermap.org/img/w/${SignleDetail.weather[0].icon}.png`
        minTemp.innerHTML = `<h4>Minimux Temperature</h4> : <h2>${Math.round(SignleDetail.main.temp_min - 273)}</h2>`
        maxTemp.innerHTML = `<h4>Minimux Temperature</h4> : <h2>${Math.round(SignleDetail.main.temp_max - 273)}</h2>`
        time.innerText = new Date()
    })
}
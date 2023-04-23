let searchValue = document.querySelector(".search")
let searchBtn = document.querySelector(".searchBtn")
let city = document.querySelector(".cityName")
let degree = document.querySelector(".degree")
let clds = document.querySelector(".clouds")

window.addEventListener("DOMContentLoaded",()=>{
    fetchWeatherApi("Chennai")
})

searchBtn.addEventListener("click",()=>{
    fetchWeatherApi(searchValue.value)
})

function fetchWeatherApi(inputValue){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=2c6823df05f8bb675e7f4e01e7870081`)
    .then(getData => getData.json())
    .then(SignleDetail => {
        console.log(SignleDetail.weather[0].main)
        city.innerText = SignleDetail.name
        degree.innerHTML = `${Math.floor(SignleDetail.main.temp - 273)}<span>${"&#176"}</span><span>${"C"}</span>`;
        clds.src = SignleDetail.weather[0].main == "Clouds" ? "./Images/73473-sunclouds.gif" : "./Images/10686-the-moon.gif"
    })
}
'use strict';

let city_input = document.querySelector('input')
let btn = document.querySelector('button')
let apiKey = 'eaa5545307881ec088c9e8f0a377b6f5'



btn.addEventListener("click", () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city_input.value}&appid=${apiKey}`)
        .then((response) => response.json())
        .then((data) => { Data(data) })
})
function Data(wether) {
    function kes(temp) {
        return (temp / 10).toFixed(1)
    }
    function img(url) {
        switch (url.weather[0].main) {
            case 'Clouds': return "./img/Clouds.png"
                break;
            case "Snow": return "./img/Snow.png"
                break;
            case 'Rain': return "./img/Rain.png"
                break;
            case "Clear": return "./img/Sun.png"
                break;
            case 'Smoke': return "./img/Smoke.png"
                break;
            default: return "./img/Sun.jpg"
        }
    }

    let imges = document.querySelector('img');
    imges.src = img(wether)
    let temp = document.querySelector("h1")
    temp.innerHTML = `${kes(wether.main.temp)} °`
    let minAndMax = document.querySelector('#maxAndMin')
    minAndMax.innerHTML = `Max:${kes(wether.main.temp_max)} ° Min:${kes(wether.main.temp_min)} °`
    let today = new Date()
    let day = document.querySelector(".today")
    day.innerHTML = `<p>Today:</p>
            <p>${today.getFullYear()}. ${today.getMonth()}. ${today.getDay()}</p>`
    let point = document.querySelector("h2")
    point.innerHTML = city_input.value
}
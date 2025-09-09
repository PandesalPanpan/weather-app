import "./styles.css";
import WeatherAPI from "./weather";
import GiphyAPI from "./giphy";

const weatherGif = document.querySelector('#weather-gif')
const form = document.querySelector('form');
const conditionDOM = document.querySelector("#weather-condition");

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const query = formData.get("search");
    WeatherAPI.getWeather(query)
    .then(response => {
        return response.currentConditions.conditions;
    })
    .then(conditions => {
        conditionDOM.textContent = `${conditions}`;
        return GiphyAPI.getGIF(conditions);
    })
    .then(src => {
        weatherGif.src = src;
    })

})

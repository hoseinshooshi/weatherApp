//https://api.openweathermap.org/data/2.5/weather?q=germany&appid=d20696531cb053cca4d00aa6c90162bc&units={metric}
const apiKey = "d20696531cb053cca4d00aa6c90162bc";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=bangalore`;
async function checkWeather() {
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data)
    return data;
}
checkWeather();
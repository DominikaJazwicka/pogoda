
const searchField = document.getElementById("SearchField");
const errorMessage = document.getElementById("ErrorMessage");

searchField.addEventListener("change", function(){
    console.log(searchField)
    if(searchField.value.length > 0) {
        getWeather(searchField.value)
        errorMessage.textContent = ""
    } else {
        errorMessage.textContent = "Miasto nie istnieje!"
    }
})

async function getWeather(city) {
    try {
        const API_KEY = "8535c4cf95aad08c0ae5a299ec837a39";
        const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
        const response = await fetch(URL);
        if(response.ok === true) {
            const data = await response.json();
            showWeather(data)
            errorMessage.textContent = ""
        } else{
            errorMessage.textContent = "Miasto nie istnieje!"
        }
    } catch (data) {
        console.log(data);
    }
}
getWeather("Warszawa");





function convertToCelsius(value) {
    return (value - 273.15).toFixed() +'\xB0 C';
}

function showWeather(item) {
    console.log(item);
    const cityName = document.getElementById("CityName");
    cityName.textContent = item.name

    const cloudsAll = document.getElementById("clouds")
    clouds.textContent = (item.clouds.all + "%")

    // const watherID = document.getElementById("WatherID")
    // watherID.textContent = item.id

    const timezone = document.getElementById("Timezone")
    timezone.textContent = item.timezone

    const visibility = document.getElementById("Visibility")
    visibility.textContent = item.visibility

    const main = document.getElementById("main")
    main.textContent = convertToCelsius(item.main.temp);

    const mainId = document.getElementById("mainId")
    mainId.textContent = convertToCelsius(item.main.feels_like)
    
    const mainTemp = document.getElementById("mainTemp")
    mainTemp.textContent = convertToCelsius(item.main.temp_min)
}

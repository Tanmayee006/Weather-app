const apiKey = "06ac4d722c86631c6f300710112b14b5";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const bgx = document.querySelector(".home img");
const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weather-icon");
async function checkweather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    // fetch to make a GET request to the OpenWeatherMap API to fetch weather data for the specified city.
    if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    var data = await response.json();
    // This line declares a variable named data to store the parsed JSON data. The await keyword ensures that the assignment to data happens only after
    //  the JSON data has been successfully parsed. Once the JSON data is parsed, it is stored in the data variable and can be used later
    //  in the code to extract specific pieces of information (e.g., city name, temperature, humidity, etc.) and display them on the web page.
    
    // parsing is used to process the JSON data received from the OpenWeatherMap API. The response.json() method parses the JSON data returned by the API response, 
    // which is initially in the form of a JSON text string. Once parsed, the data becomes accessible as a structured JavaScript object, allowing you to 
    // easily access and work with the weather-related information it contains.
    console.log(data);
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
    document.querySelector(".wind").innerHTML=data.wind.speed + " km/hr";

    if(data.weather[0].main=="Clouds"){
        bgx.src="Images/cloudimg.jpg";
        weathericon.src="Images/clouds.png";
    }
    else if(data.weather[0].main=="Clear"){
        bgx.src="Images/clearimg.jpg";
        weathericon.src="Images/clear.png";
    }
    else if(data.weather[0].main=="Drizzle"){
        bgx.src="Images/drizzleimg.jpg";
        weathericon.src="Images/drizzle.png";
    }
    else if(data.weather[0].main=="Rain"){
        bgx.src="Images/rainimg.jpg";
        weathericon.src="Images/rain.png";
    }
    else if(data.weather[0].main=="Mist"){
        bgx.src="Images/mistimg.jpg";
        weathericon.src="Images/mist.png";
    }
    document.querySelector(".weather").style.display ="block";
    document.querySelector(".error").style.display="none";
}
searchbtn.addEventListener("click",()=>{
checkweather(searchbox.value);
})
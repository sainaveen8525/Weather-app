const apikey  ="e39e7795b87ff0e9c0665134eb1172c1";
const apiurl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';
const searchbox = document.querySelector("#searchbox");
const searchbtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weather-img")


async function weatherdata(city){
    const response = await fetch(apiurl+city+"&appid="+apikey);
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
        const data = await response.json(); 
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

        const condition = data.weather[0].main.toLowerCase();

        if(condition === "clear"){
            weathericon.src="images/clear.png";
        } else if(condition === "clouds"){
            weathericon.src="images/clouds.png";
        } else if(condition === "drizzle"){
            weathericon.src="images/drizzle.png";
        } else if(condition === "mist"){
            weathericon.src="images/mist.png";
        } else if(condition === "rain"){
            weathericon.src="images/rain.png";
        } else if(condition === "snow"){
            weathericon.src="images/snow.png";
        } else {
           weathericon.src="images/mist.png";
        }

        document.querySelector(".weather").style.display = "block"; 
        document.querySelector(".error").style.display = "none";
    }
    
}

searchbtn.addEventListener("click", () => {
    weatherdata(searchbox.value.trim());
})

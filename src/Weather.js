import React, { useState } from 'react';
import axios from 'axios';

function Weather() {
  const [city, setCity] = useState(''); 
  const [weatherData, setWeatherData] = useState(null); 
  const handleCityWeatherChange = (event) => {
    setCity(event.target.value);
  }
  const fetchWeather = async() => {
    try{
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7cca0ef2141a88a85efa77a0beffa485`)
        setWeatherData(response.data);
    }
    catch(error){
        console.error('Error fetching weather data:', error);
    }
  }

  const handleGetWeather = () => {
    
    console.log(`Fetching weather data for ${city}`);
    fetchWeather();
  }
  return (
    <div className="weather-container">
        <input type="text" placeholder="Enter city name" value={city} onChange=
        {handleCityWeatherChange}/>
        <button className="weather-button" onClick={handleGetWeather}>Get Weather</button>  
        {weatherData && (
            <div className="weather-info">
                <h2>Weather in {weatherData.name}</h2>
                <p>Temperature: {weatherData.main.temp} K</p>
                <p>Description: {weatherData.weather[0].description}</p>
            </div>
        )}
    </div>
  );
}

export default Weather;

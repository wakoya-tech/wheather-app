import React, { useEffect, useState } from 'react';
import './Weather.css';
import search_icon from '../assets/Search.png';
import rain from '../assets/Rain.png';
import cloud from '../assets/Cloud.png';
import clear from '../assets/Clear.png';
import drizzle from '../assets/Drizzle.png';
import snow from '../assets/Snow.png';
import wind from '../assets/Wind.png';
import humidity from '../assets/Humidity.png';
function Weather() {
  const [weatherData, setWeatherData] = useState(null);
  
  const [city, setCity] = useState(""); 

  const allIcons = {
    "01d": clear, "01n": clear,
    "02d": cloud, "02n": cloud,
    "03d": cloud, "03n": cloud,
    "04d": drizzle, "04n": drizzle,
    "09d": rain, "09n": rain,
    "10d": rain, "10n": rain,
    "13d": snow, "13n": snow,
  };

  const search = async (query) => {
    if (!query) return;
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${import.meta.env.VITE_APP_ID}`;
      
      const response = await fetch(url);
      const data = await response.json();

      if (data.cod !== 200) {
        alert(data.message);
        return;
      }

      const icon = allIcons[data.weather[0].icon] || clear;

      setWeatherData({
        temperature: Math.floor(data.main.temp),
        humidity: data.main.humidity,
        windSpeed: Math.floor(data.wind.speed * 3.6), 
        location: data.name,
        icon: icon,
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    search("London"); // default city
  }, []);

  const handleSearch = () => {
    search(city);
    setCity(""); // clear input
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  if (!weatherData) return <div>Loading...</div>;

  return (
    <div className='weather'>
      <div className="search-bar">
        <input 
          type="text" 
          placeholder='Search' 
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <img src={search_icon} alt="Search" onClick={handleSearch} style={{cursor: 'pointer'}} />
      </div>

      <img src={weatherData.icon} alt="Weather Icon" className='weather-icon' />
      <p className='temperature'>{weatherData.temperature}°C</p>
      <p className='location'>{weatherData.location}</p>

      <div className="weather-data">
        <div className="col">
          <img src={humidity} alt="Humidity" />
          <div>
            <p>{weatherData.humidity}%</p>
            <span>Humidity</span>
          </div>
        </div>

        <div className="col">
          <img src={wind} alt="Wind Speed" />
          <div>
            <p>{weatherData.windSpeed} km/h</p>
            <span>Wind Speed</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;

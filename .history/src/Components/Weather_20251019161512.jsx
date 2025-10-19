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

  const allIcons = {
    "01d": clear,
    "01n": clear,
    "02d": cloud,
    "02n": cloud,
    "03d": cloud,
    "03n": cloud,
    "04d": drizzle,
    "04n": drizzle,
    "09d": rain,
    "09n": rain,
    "10d": rain,
    "10n": rain,
    "13d": snow,
    "13n": snow,
  };

  const search = async (city) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`;
      console.log("API Key:", import.meta.env.VITE_APP_ID);

      const response = await fetch(url);
      const data = await response.json();
      console.log(data);

      if (data.cod !== 200) return; // handle errors

      const icon = allIcons[data.weather[0].icon] || clear;

      setWeatherData({
        temperature: Math.floor(data.main.temp),
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        location: data.name,
        icon: icon,
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    search("London");
  }, []);

  if (!weatherData) return <div>Loading...</div>;

  return (
    <div className='weather'>
      <div className="search-bar">
        <input type="text" placeholder='Search' />
        <img src={search_icon} alt="Search" />
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

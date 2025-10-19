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
  const [weatherData,setWeatherData]=useState(false);
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
  
  const search = async (city)=>{
    try{      
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`;

      console.log("API Key:", import.meta.env.VITE_APP_ID);


      const response= await fetch(url);
      const data = await response.json();
        console.log(data);
        const icon = allIcons[data.weatherData[0] || clear_icon ]
        setWeatherData({
        humidity:data.main.humidity,
        windSpeed:data.wind.speed,
        temperature:Math.floor(data.main.temp),
        location:data.name,
        icon:icon
      });
    
    }
    catch(error){

    }
  }
  useEffect(()=>{
    search("New York");
  },[])
  return (
    <div className='weather'>
      <div className="search-bar">
        <input type="text" placeholder='Search' />
        <img src={search_icon} alt="Search" />
      </div>

      <img src={clear} alt="Weather Icon" className='weather-icon' />
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
            <p>{weatherData.windSpeed}km/h</p>
            <span>Wind Speed</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Weather;


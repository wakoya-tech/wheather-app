import React, { useEffect, useState } from 'react';
import './Weather.css';
import search_icon from '../assets/Search.png';
/*import rain from '../assets/Rain.png';
import cloud from '../assets/Cloud.png';*/
import clear from '../assets/Clear.png';
/*import drizzle from '../assets/Drizzle.png';
import snow from '../assets/Snow.png';*/
import wind from '../assets/Wind.png';
import humidity from '../assets/Humidity.png';

function Weather() {
  const [weatherData,setWeatherData]=useState(false);
 const allIcons ={
  "01d":clear_icon,
  "01n":clear_icon,
  "02d":cloud_icon,
  "02d":cloud_icon,
  "03d":cloud_icon,
  "03n":cloud_icon,
  "04d":drizzle_icon,
  "04n":drizzle_icon,
  "09d":rain_icon,
  "09n":rain_icon,
  "10d":rain_icon,
  "10n":rain_icon,
  "13d":snow_icon,
  "13n":snow_icon,
 }
  const search = async (city)=>{
    try{      
      const url =`https://api.openweathermap.org/data/2.5/weather?q={city}
      &units=metric&appid=${import.meta.env.VITE_APP_ID}`
      const response= await fetch(url);
      const data = await response.json();
        console.log(data);
        setWeatherData({
        humidity:data.main.humidity,
        windSpeed:data.wind.speed,
        temperature:Math.floor(data.main.temp),
        location:data.name
        icon:
      });
    
    }
    catch(error){

    }
  }
  useEffect(()=>{
    search("London");
  },[])
  return (
    <div className='weather'>
      <div className="search-bar">
        <input type="text" placeholder='Search' />
        <img src={search_icon} alt="Search" />
      </div>

      <img src={clear} alt="Weather Icon" className='weather-icon' />
      <p className='temperature'>16°C</p>
      <p className='location'>London</p>

      <div className="weather-data">
        <div className="col">
          <img src={humidity} alt="Humidity" />
          <div>
            <p>91%</p>
            <span>Humidity</span>
          </div>
        </div>

        <div className="col">
          <img src={wind} alt="Wind Speed" />
          <div>
            <p>3.6 km/h</p>
            <span>Wind Speed</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Weather;


import React from 'react';
import './Weather.css';
import search_icon from '../assets/Search.png';
import rain from '../assets/rain.png';
import cloud from './assets/cloud.png';
import clear from '../assets/clear.png';
import drizzle from '../assets/drizzle.png';
import snow from '../assets/snow.png';
import wind from '../assets/wind.png';
import humidity from '../assets/humidity.png';

function Weather() {
  return (
    <div className='weather'>
      <div className="search-bar">
        <input type="text" placeholder='Search' />
        <img className='img' src={search_icon} alt="Search" />
      </div>
    </div>
  );
}

export default Weather;

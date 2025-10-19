import React from 'react';
import './Weather.css';
import rain from '../assets/rain.jpg';
import cloud from './assets/cloud.jpg';
import clear from '../assets/clear.jpg';
import drizzle from '../assets/drizzle.jpg';
import snow from '../assets/snow.jpg';
import wind from '../assets/wind.jpg';
import humidity from '../assets/humidity.jpg';

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

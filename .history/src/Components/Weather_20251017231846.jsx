import React from 'react';
import './Weather.css';
import search_icon from './assets/Search.png';

function Weather() {
  return (
    <div className='weather'>
      <div className="search-bar">
        <input type="text" placeholder='Search' />
        <img src={search_icon} alt="Search" />
      </div>
    </div>
  );
}

export default Weather;

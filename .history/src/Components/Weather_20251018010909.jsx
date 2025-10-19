import React from 'react';
import './Weather.css';
import search_icon from '../assets/Search.png';
/*import rain from '../assets/Rain.png';
import cloud from '../assets/Cloud.png';*/
import clear from '../assets/Clear.png';
/*import drizzle from '../assets/Drizzle.png';
import snow from '../assets/Snow.png';
import humidity from '../assets/Humidity.png';
*/
function Weather() {
  return (
    <div className='weather'>
      <div className="search-bar">
        <input type="text" placeholder='Search' />
        <img  src={search_icon} alt="Search" />
       
      </div>
       <img src={clear} alt="" className='weather-icon'/>
        <p className='temperature'>16°C</p>
        <p className='location'>London</p>
    </div>
  );
}

export default Weather;

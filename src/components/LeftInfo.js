import React, { useContext, useState } from 'react';
import { WeatherContext } from '../context.js';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud } from '@fortawesome/free-solid-svg-icons';

const LeftInfo = () => {
  const { temperature, city, hours, minutes, dayOfWeek, date, month, year, cityInfo, isLoading, error } = React.useContext(WeatherContext);

  if (isLoading) {
    return <h1>Loading..</h1>;
  }

  return (
    <div className='left-info'>
      <h1>{temperature}°</h1>
      <div className='location-info'>
        <h3>{city}</h3>
        <p>
          {hours < 10 && '0'}
          {hours}:{minutes < 10 && '0'}
          {minutes} - {dayOfWeek}, {date} {month} {year}
        </p>
      </div>
      <div className='weather-status'>
        {/* <i className='fas fa-cloud-showers-heavy fa-2x'></i> */}
        <FontAwesomeIcon icon={faCloud} className='weather-icon fa-2x' />
        <p>Nice</p>
      </div>
    </div>
  );
};

export default LeftInfo;

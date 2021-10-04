import React from 'react';
import { WeatherContext } from '../context.js';
import mainClear from '../images/main-clear.jpeg';
import mainRainy from '../images/main-rainy.jpg';
import phoneRainy from '../images/phone-rainy.jpg';
import phoneWarm from '../images/phone-warm.jpg';

const Background = () => {
  const { weatherCondition } = React.useContext(WeatherContext);

  const documentBody = document.querySelector('body');

  // <= 650 is phone width in css

  if (window.innerWidth <= 650) {
    if (weatherCondition === 'Clear' || weatherCondition === 'Clouds') {
      documentBody.style.background = `url(${phoneWarm}) no-repeat center center/cover`;
      console.log(window.innerWidth);
    }

    if (weatherCondition === 'Rain' || weatherCondition === 'Mist') {
      documentBody.style.background = `url(${phoneRainy}) no-repeat center center/cover`;
    }
  } else {
    if (weatherCondition === 'Clear' || weatherCondition === 'Clouds') {
      documentBody.style.background = `url(${mainClear}) no-repeat center center/cover`;
      console.log(window.innerWidth);
    }

    if (weatherCondition === 'Rain' || weatherCondition === 'Mist') {
      documentBody.style.background = `url(${mainRainy}) no-repeat center center/cover`;
    }
  }

  return <></>;
};

export default Background;

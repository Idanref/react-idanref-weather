import React, { useState, useEffect } from 'react';
import axios from 'axios';
import mockCity from './mockCity';

const rootUrl = 'https://api.openweathermap.org/data/2.5/weather?q=';
// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

const WeatherContext = React.createContext();

const WeatherProvider = ({ children }) => {
  const [city, setCity] = useState('Tel Aviv');
  const [temperature, setTemperature] = useState(0);
  // Date
  const [dayOfWeek, setDayOfWeek] = useState('');
  var today = new Date();
  const date = today.getDate();
  const [month, setMonth] = useState('');
  const year = today.getFullYear();
  // Time
  const hours = today.getHours();
  // const minutes = today.getMinutes();
  const [minutes, setMinutes] = useState(0);
  // Weather Status
  const [country, setCountry] = useState('');
  const [humidity, setHumidity] = useState(62);
  const [wind, setWind] = useState(8);
  const [feelsLike, setFeelsLike] = useState(0);
  const [weatherCondition, setWeatherCondition] = useState('');
  // City Info
  const [cityInfo, setCityInfo] = useState(mockCity);
  // Utilities
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const searchCity = async (city) => {
    const response = await axios(`${rootUrl}${city}&units=metric&appid=${process.env.REACT_APP_ACCESS_KEY}`).catch((err) => console.log(err));

    setIsLoading(true);

    if (response) {
      // fix uppercase after ' ' / '-'
      setError(false);
      setIsLoading(false);
      const capitalizedCity = capitalizeTheFirstLetterOfEachWord(city);
      setCity(capitalizedCity);
      console.log(cityInfo);
      setTemperature(Math.round(response.data.main.temp));
      setCountry(response.data.sys.country);
      setHumidity(Math.round(response.data.main.humidity));
      setWind(Math.round(response.data.wind.speed));
      setWind(Math.round(response.data.wind.speed));
      setFeelsLike(Math.round(response.data.main.feels_like));
      setWeatherCondition(response.data.weather[0].main);
    } else {
      setError(true);
      console.log(error);
    }
  };

  useEffect(() => {
    searchCity(city);
    getDayOfWeek();
    getMonth();
    updateMinutes();
  }, []);
  // To Fix On useEffect - Real-Time clock changing - This is maybe the code (works only when initial value is 0)
  // while (true) {
  //   const interval = setInterval(() => {
  //     updateMinutes();
  //   }, 1000);

  //   return () => clearInterval(interval);
  // }

  // Utility Functions

  function capitalizeTheFirstLetterOfEachWord(city) {
    var separateWord = city.toLowerCase().split(' ');
    for (var i = 0; i < separateWord.length; i++) {
      separateWord[i] = separateWord[i].charAt(0).toUpperCase() + separateWord[i].substring(1);
    }
    return separateWord.join(' ');
  }

  const getDayOfWeek = () => {
    const day = today.getDay();

    if (day === 0) setDayOfWeek('Sunday');
    if (day === 1) setDayOfWeek('Monday');
    if (day === 2) setDayOfWeek('Tuesday');
    if (day === 3) setDayOfWeek('Wednesday');
    if (day === 4) setDayOfWeek('Thursday');
    if (day === 5) setDayOfWeek('Friday');
    if (day === 6) setDayOfWeek('Saturday');
  };

  const getMonth = () => {
    const monthNum = today.getMonth();

    if (monthNum === 0) setMonth('Jan.');
    if (monthNum === 1) setMonth('Mon.');
    if (monthNum === 2) setMonth('Mar.');
    if (monthNum === 3) setMonth('Apr.');
    if (monthNum === 4) setMonth('May.');
    if (monthNum === 5) setMonth('June');
    if (monthNum === 6) setMonth('July');
    if (monthNum === 7) setMonth('Aug.');
    if (monthNum === 8) setMonth('Sep.');
    if (monthNum === 9) setMonth('Oct.');
    if (monthNum === 10) setMonth('Nov.');
    if (monthNum === 11) setMonth('Dec.');
  };

  const updateMinutes = () => {
    setMinutes(() => today.getMinutes());
  };

  return (
    <WeatherContext.Provider
      value={{
        temperature,
        city,
        country,
        humidity,
        wind,
        feelsLike,
        weatherCondition,
        hours,
        minutes,
        dayOfWeek,
        date,
        month,
        year,
        searchCity,
        cityInfo,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export { WeatherProvider, WeatherContext };

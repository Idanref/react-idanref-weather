const mockCity = {
  coord: {
    lon: 34.8,
    lat: 32.0833,
  },
  weather: [
    {
      id: 801,
      main: 'Clouds',
      description: 'few clouds',
      icon: '02n',
    },
  ],
  base: 'stations',
  main: {
    temp: 296.84,
    feels_like: 297.14,
    temp_min: 294.42,
    temp_max: 297.69,
    pressure: 1014,
    humidity: 72,
  },
  visibility: 10000,
  wind: {
    speed: 2.57,
    deg: 140,
  },
  clouds: {
    all: 20,
  },
  dt: 1633295053,
  sys: {
    type: 1,
    id: 6845,
    country: 'IL',
    sunrise: 1633318590,
    sunset: 1633360939,
  },
  timezone: 10800,
  id: 293396,
  name: 'Tel Aviv',
  cod: 200,
};

export default mockCity;

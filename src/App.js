import './App.css';
import LeftInfo from './components/LeftInfo.js';
import Sidebar from './components/Sidebar';
import { WeatherContext } from './context.js';

// Parse time
// fix real-time minutes
// capitalize all words on city name
// Parse from API
// Font Awesome
// Add Error and loading text
// HIDE API KEY
// Add social icons for my github & linkedin
// Change background based on weather
// Finish the weather-condition section

function App() {
  return (
    <section className='container'>
      <img src='./images/main-photo.jpeg' alt='' />
      <LeftInfo />
      <Sidebar />
    </section>
  );
}

export default App;

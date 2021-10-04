import './App.css';
import Background from './components/Background';
import LeftInfo from './components/LeftInfo.js';
import Sidebar from './components/Sidebar';
import { WeatherContext } from './context.js';
import background from './images/main-clear.jpeg';

// Change background based on weather
// fix real-time minutes
// Add Error and loading text
// Add social icons for my github & linkedin
// Add photos to github

function App() {
  // document.body.style = `background-image: url('./images/main-clear.jpeg') no-repeat center center/cover`;

  // document.querySelector('body').style.background = `url(./main.jpeg) no-repeat center center/cover`;

  return (
    <>
      <section className='container'>
        {/* <img src='./images/main-photo.jpeg' alt='' /> */}
        <Background />
        <LeftInfo />
        <Sidebar />
      </section>
    </>
  );
}

export default App;

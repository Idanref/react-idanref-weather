import './App.css';
import Social from './components/Social';
import Background from './components/Background';
import LeftInfo from './components/LeftInfo.js';
import Sidebar from './components/Sidebar';

// Add photos to github

function App() {
  return (
    <>
      <section className='container'>
        <Social />
        <Background />
        <LeftInfo />
        <Sidebar />
      </section>
    </>
  );
}

export default App;

import './App.scss'
import NavBar from './Components/NavBar';
import HomePage from './Pages/HomePage';
import About from './Pages/About';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className='sidebar'>
        <NavBar />
      </div>
      <div className='main-content'>
        <div className='content'>
          <Routes>
            <Route path='/' exact element={<HomePage />} />
            <Route path='/about' exact element={<About />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;

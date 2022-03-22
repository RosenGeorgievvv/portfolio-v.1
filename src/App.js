import './App.scss'
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import NavBar from './Components/NavBar';
import HomePage from './Pages/HomePage';
import About from './Pages/About';

import Contacts from './Pages/Contacts';
import Portfolio from './Pages/Portfolio';

function App() {
  const [navToggle, setNavToggle] = useState(false);
  const navClick = () => {
    setNavToggle(!navToggle)
  }

  return (
    <div className="App">
      <div className={`sidebar ${navToggle ? 'nav-toggle' : ''}`}>
        <NavBar />
      </div>
      <div className='nav-btn' onClick={navClick}>
        <div className='lines-1'></div>
        <div className='lines-2'></div>
        <div className='lines-3'></div>
      </div>
      <div className='main-content'>
        <div className='content'>
          <Routes>
            <Route path='/' exact element={<HomePage />} />
            <Route path='/about' exact element={<About />} />
            <Route path='/portfolio' exact element={<Portfolio />} />
            <Route path='/contacts' exact element={<Contacts />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;

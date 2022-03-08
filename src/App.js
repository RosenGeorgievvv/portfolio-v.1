import './App.scss'
import { Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import HomePage from './Pages/HomePage';
import About from './Pages/About';

import Contacts from './Pages/Contacts';
import Portfolio from './Pages/Portfolio';

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
            <Route path='/portfolios' exact element={<Portfolio />} />
            <Route path='/contacts' exact element={<Contacts />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;

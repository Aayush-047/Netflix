import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
// import Navbar from './Navbar';
import Movies from './pages/Movies';
import Tvseries from './pages/Tvseries';
import Login from './login';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/tvseries" element={<Tvseries />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

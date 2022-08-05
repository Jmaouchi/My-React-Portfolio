import React from 'react';
import './App.css';
import Main from './pages/Main/Main';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Work from './pages/Work/Work'
import ContactPage from './Components/Contact';
import Reviews from './pages/Reviews/Reviews';


function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={<Main/>} />
        {/* <Route path="/about" element={<About/>} /> */}
        <Route path="/work" element={<Work/>} />
        <Route path="/Reviews" element={<Reviews/>} />
        <Route path="/Contact" element={<ContactPage/>} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;

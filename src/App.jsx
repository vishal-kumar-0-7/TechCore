import React, { useState } from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import WebDevelopment from './pages/WebDevelopment';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/web-development" element={<WebDevelopment />} />
      </Routes>
    </div>
  )
}

export default App

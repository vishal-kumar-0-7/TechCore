import React, { useState } from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/services/Home';
import WebDevelopment from './pages/services/WebDevelopment';
import AppDevelopment from './pages/services/AppDevelopment';
import AiAutomation from './pages/services/ai_automation';


import StartupSolution from './pages/solutions/Startup';
function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/web-development" element={<WebDevelopment />} />
        <Route path="/services/app-development" element={<AppDevelopment />} />
        <Route path="/services/ai-automation" element={<AiAutomation />} />
        
        <Route path="/solutions/startup" element={<StartupSolution/>}/>
        
      </Routes>
    </div>
  )
}

export default App

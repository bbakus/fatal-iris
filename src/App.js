import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FallenIris from './components/FallenIrisLanding';
import MansionIntro from './components/MansionIntro';
import FatalIris from './components/FatalIris';
import Leaderboard from './components/Leaderboard';


function App() {
  return (
    <BrowserRouter>
    <Routes>
    
      
      <Route path="/" element={<FallenIris />} />
      <Route path="/mansion-intro" element={<MansionIntro />} />
      <Route path="/fatal-iris" element={<FatalIris />} />
      <Route path="/leaderboard" element={<Leaderboard />} />
    
  
    </Routes>
    </BrowserRouter>
  );
}

export default App;



import React, {useState, useEffect} from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FallenIris from './components/FallenIrisLanding';
import MansionIntro from './components/MansionIntro';
import FatalIris from './components/FatalIris';
import Leaderboard from './components/Leaderboard';


function App() {

  const [scores, setScores] = useState([])

  useEffect(() => {
      fetch("http://localhost:3000/scoreboard")
      .then(response => response.json())
      .then(data => setScores(data))
  }, [])

  function addScore(newScore){

    setScores([...scores, newScore])

  }
 
  return (
    <BrowserRouter>
    <Routes>
    
      
      <Route path="/" element={<FallenIris />} />
      <Route path="/mansion-intro" element={<MansionIntro />} />
      <Route path="/fatal-iris" element={<FatalIris addScore={addScore} />} />
      <Route path="/leaderboard"  element={<Leaderboard scores={scores} />} />
    
  
    </Routes>
    </BrowserRouter>
  );
}

export default App;



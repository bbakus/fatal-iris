

import React from "react";
import { useState } from "react";
import Solve from "./Solve"



function Home({ inventory, setCurrentRoom, rooms }) { 
  
  const [solve, setSolve] = useState(false)
  const [startTime] = useState(new Date())

  function handleSolve(){
    setSolve(true)
  }

  


  return (
    <div className="home-screen">
      
      {solve ? (<Solve inventory={inventory} startTime={startTime} onBack={() => setSolve(false)}/>) : (
      <>
      <button onClick={handleSolve} className="solve-button">SOLVE</button>
      <div className="room-grid">
        {Object.keys(rooms).map(roomKey => (
          <button
            key={roomKey}
            onClick={() => setCurrentRoom(roomKey)}
            className="room-button"
          >
            <img src={rooms[roomKey].door}/>
          </button>
        ))}
      </div>
      </>
      )}
    </div>
  );
}

export default Home;
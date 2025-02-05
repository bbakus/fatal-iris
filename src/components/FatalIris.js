import React, { useState } from 'react';
import Home from './Home';
import Room from './Room';

function FatalIris() {
  const [currentRoom, setCurrentRoom] = useState(null);
  
  return (
    <div className="game-container">
      {!currentRoom ? (
        <Home setCurrentRoom={setCurrentRoom} />
      ) : (
        <Room 
          roomKey={currentRoom} 
          onExit={() => setCurrentRoom(null)} 
        />
      )}
    </div>
  );
}

export default FatalIris;
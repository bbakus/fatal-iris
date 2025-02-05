import React, { useState, useEffect } from 'react';
import Home from './Home';
import Room from './Room';

function FatalIris() {
  const [currentRoom, setCurrentRoom] = useState(null);

  const [rooms, setRooms] = useState({})
    
    useEffect(() => {
      fetch("http://localhost:3000/rooms")
      .then(response => response.json())
      .then(data => {
        console.log("Data received:", data)
        return setRooms(data)
      })
    }, [])

  
  return (
    <div className="game-container">
      {!currentRoom ? (
        <Home rooms={rooms} setCurrentRoom={setCurrentRoom} />
      ) : (
        <Room 
          rooms={rooms}
          roomKey={currentRoom} 
          onExit={() => setCurrentRoom(null)} 
        />
      )}
    </div>
  );
}

export default FatalIris;
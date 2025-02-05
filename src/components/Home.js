

// Home.js
import React from "react";
import { rooms } from '../data/rooms';
import { useState } from "react";



function Home({ setCurrentRoom }) { 
  
  
  return (
    <div className="home-screen">
      
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
    </div>
  );
}

export default Home;
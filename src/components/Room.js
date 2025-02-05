// Room.js
import React, { useState } from 'react';
import { rooms } from '../data/rooms';


function Room({ roomKey, onExit }) {
  
  const [clueFound, setClueFound] = useState("")

  const room = rooms[roomKey];

  return (
    <div className="room-screen">
      <div className="room-header">
        <h2>{room.name}</h2>
        <button className="exit-button" onClick={onExit}>Exit Room</button>
      </div>
      <div className="room-image">
        <img src={room.image} alt={room.name} />
      </div>
      <div className="room-content">
        <div className="inventory-panel">
          <h3>Inventory</h3>
          <ul>
            {/* We'll add inventory items here */}
          </ul>
        </div>
      </div>
      <div className="room-description">
        <p>{room.description}</p>
      </div>
    </div>
  );
}

export default Room;
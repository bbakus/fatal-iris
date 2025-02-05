// Room.js
import React, { useState, useEffect } from 'react';
// import { rooms } from '../data/rooms';
import TypewriterText from './Typerwriter';


function Room({ rooms, roomKey, onExit }) {
  
  const [selectedClue, setSelectedClue] = useState({});
  // const [rooms, setRooms] = useState({})
  // const [isLoading, setIsLoading] = useState(true); 

  // useEffect(() => {
  //   fetch("http://localhost:3000/rooms")
  //   .then(response => response.json())
  //   .then(data => {
  //     console.log("Data received:", data)
  //     setIsLoading(false);
  //     return setRooms(data)
  //   })
  // }, [])


  // if (isLoading || !rooms[roomKey]) {
  //   return <div>Loading...</div>;
  // }

  const room = rooms[roomKey];



  return (
    <div className="room-screen">
      <div className="room-header">
          <h2>{room.name}</h2>
          <button className="exit-button" onClick={onExit}>Exit Room</button>
        </div>
        <div className="room-image">
          <img src={room.image} alt={room.name} />
           {/* Render clue buttons */}
        {Object.entries(room.clues).map(([clueId, clue]) => (
          <button
            key={clueId}
            className="clue-button"
            style={{
              position: 'absolute',
              top: clue.position?.top,
              left: clue.position?.left,
            }}
            onClick={() => setSelectedClue(clue)}
          >
          </button>
        ))}

        {/* Clue modal/popup */}
        {selectedClue && (
          <div className="clue-modal">
            <img src={selectedClue.image} alt={selectedClue.item} />
            <h3>{selectedClue.item}</h3>
            <p>{selectedClue.description}</p>
            <button className="clueCloseButton" onClick={() => setSelectedClue(null)}>Close</button>
          </div>
        )}
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
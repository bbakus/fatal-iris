
import React, { useState } from 'react';
import TypewriterText from './Typerwriter';


function Room({ addToInventory, inventory, rooms, roomKey, onExit }) {

  
  const [selectedClue, setSelectedClue] = useState(null);
  const [showInvestigation, setShowInvestigation] = useState(false)
  const room = rooms[roomKey];

  const handleClueClick = (clue) => {
    setSelectedClue(clue)
    setShowInvestigation(false)
    setTimeout(() => {
      addToInventory(clue)
    }, 3000)
  }

  const handleInventoryClick = (clue) => {
    setSelectedClue(clue);
    setShowInvestigation(true);  // Show investigation when clicking inventory
  };


  return (
    <div className="room-screen">
      <div className="room-header">
          <button className="exit-button" onClick={onExit}>Exit Room</button>
        </div>
        <div className="mouse-over-text">
          <h3>USE CURSOR TO FIND CLUES</h3>
        </div>
        <div className="room-image">
          <h1 className="">USE CURSOR TO FIND CLUES</h1>
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
              width: '50px',  // Add width
              height: '50px', // Add height
              // background: 'rgba(255, 255, 255, 0.7)', // Uncomment to see button areas while testing
            }}
            onClick={() => handleClueClick(clue) }
            
          >
          </button>
        ))}

        {selectedClue && (
          <div className="clue-modal">
            <img src={selectedClue.image} alt={selectedClue.item}/>
            <h3>{selectedClue.item}</h3>
            <TypewriterText
            text={showInvestigation ? selectedClue.investigation : selectedClue.description}
            speed={20}
          />
            <button className="clueCloseButton" onClick={() => {
              setShowInvestigation(true)
              setSelectedClue(null)}}>Close</button>
          </div>
        )}
        </div>
        <div className="room-content">
          <div className="inventory-panel">
            <h3>INVESTIGATE</h3>
            <div className="inventory">
            {inventory.map(clue => (
              <div key={clue.item} className="inventory-item">
                <h3 onClick={() => handleInventoryClick(clue)}
                style={{cursor: 'pointer'}}>{clue.item}</h3>
              </div>
            ))}
          </div>
          </div>
        </div>
        
        <div className="room-description">
          <p>{room.description}</p>
      </div>
    </div>
  );
}

export default Room;
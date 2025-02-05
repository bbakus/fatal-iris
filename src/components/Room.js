// Room.js
import React, { useState } from 'react';
import { rooms } from '../data/rooms';


function Room({ roomKey, onExit }) {
  const [userInput, setUserInput] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  
  const room = rooms[roomKey];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    // Add user message to chat
    const userMessage = {
      sender: 'user',
      content: userInput,
      timestamp: new Date().toISOString()
    };
    
    setChatHistory(prev => [...prev, userMessage]);
    setIsLoading(true);
    setUserInput('');

  };

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
        <div className="chat-section">
          <div className="chat-history">
            {chatHistory.map((message, index) => (
              <div 
                key={index} 
                className={`chat-message ${message.sender}-message`}
              >
                <p>{message.content}</p>
              </div>
            ))}
            {isLoading && (
              <div className="chat-message ai-message">
                <p>Thinking...</p>
              </div>
            )}
          </div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Investigate the room..."
              disabled={isLoading}
            />
            <button type="submit" disabled={isLoading}>
              Send
            </button>
          </form>
        </div>
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
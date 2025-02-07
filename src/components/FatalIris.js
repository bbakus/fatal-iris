import React, { useState, useEffect } from 'react';
import Home from './Home';
import Room from './Room';

function FatalIris() {
  const [currentRoom, setCurrentRoom] = useState(null);

  const [inventory, setInventory] = useState([])

  const [rooms, setRooms] = useState({})
    
    useEffect(() => {
      fetch("http://localhost:3000/rooms")
      .then(response => response.json())
      .then(data => {
        console.log("Data received:", data)
        return setRooms(data)
      })
    }, [])


    useEffect(() => {
      const savedInventory = localStorage.getItem("clueInventory")
      if(savedInventory){
        setInventory(JSON.parse(savedInventory))
      }
    }, [])
  
    useEffect(() => {
      localStorage.setItem("clueInventory", JSON.stringify(inventory))
  
    }, [inventory])
  
    const addToInventory = (clue) => {
      if(!inventory.some(item => item.item === clue.item)){
        setInventory([...inventory, clue])
      }
    }
  

  
  return (
    <div className="game-container">
      {!currentRoom ? (
        <Home inventory={inventory} rooms={rooms} setCurrentRoom={setCurrentRoom} />
      ) : (
        <Room 
          addToInventory={addToInventory}
          inventory={inventory}
          rooms={rooms}
          roomKey={currentRoom} 
          onExit={() => setCurrentRoom(null)} 
        />
      )}
    </div>
  );
}

export default FatalIris;
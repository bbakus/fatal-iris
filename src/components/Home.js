

// Home.js
import React from "react";
// import { rooms } from '../data/rooms';
import { useState, useEffect } from "react";



function Home({ setCurrentRoom, rooms }) { 

  // const [rooms, setRooms] = useState({})
  
  //   useEffect(() => {
  //     fetch("http://localhost:3000/rooms")
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log("Data received:", data)
  //       return setRooms(data)
  //     })
  //   }, [])
  
  
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
import React from "react";

function FallenIris({setLandingPage}){

    function handleEnter(){
        setLandingPage(false)
    }

    return(
        <div className="landing-container">
            <h1 className="game-title">FATAL IRIS</h1>
            <div className="fallen-iris-container">
                <button onClick={handleEnter} className="enter-button">ENTER</button>
                <img src="./images/FallenIris.png" className="fallen-iris-image"/>
            </div>
        </div>
    )
}


export default FallenIris
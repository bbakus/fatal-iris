import React from "react";
import { NavLink } from "react-router-dom";

function FallenIris({setLandingPage}){

    function handleEnter(){
        setLandingPage(false)
    }

    return(
        <div className="landing-container">
            <h1 className="game-title">FATAL IRIS</h1>
            <div className="fallen-iris-container">
                <img src="./images/FallenIris.png" className="fallen-iris-image"/>
            </div>
            <div className="fallen-iris-nav">
                <nav>
                    <NavLink className={({isActive}) =>
                    isActive ? 'nav-link-mansion-intro-active' : 'nav-link-mansion-intro'} 
                    to="/fallen-iris/mansion-intro">STORY</NavLink>
                    <NavLink className={({isActive}) =>
                    isActive ? 'nav-link-fatal-iris-active' : 'nav-link-fatal-iris'} 
                    to="/fallen-iris/fatal-iris">START</NavLink>
                    <NavLink className={({isActive}) =>
                    isActive ? 'nav-link-leaderboard-active' : 'nav-link-leaderboard'}  
                    to="/fallen-iris/leaderboard">LEADERBOARD</NavLink>
                </nav>
            </div>
        </div>
    )
}


export default FallenIris
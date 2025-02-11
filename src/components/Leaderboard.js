import React, { useEffect, useState } from "react";


function Leaderboard(){

    const [scores, setScores] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/scoreboard")
        .then(response => response.json())
        .then(data => setScores(data))
    }, [])

    return (
        <div className="leaderboard-container">
        <h3>LEADERBOARD</h3>
            <div className="leaderboard-list">
                <ol>
                    {scores.sort((a,b) => b.score - a.score).map((score, index) => {
                return(
                        <li key={score.id}>
                            <span>{score.name}</span> 
                            <span>{score.score}</span>
                        </li>
                    )
                    })}
                </ol>
            </div>
            <img className="art-deco" src="/images/art-deco-1.png"/>
        </div>
    )
}

export default Leaderboard
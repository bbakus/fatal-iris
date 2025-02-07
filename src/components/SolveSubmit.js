

import React, {useState, useEffect} from "react";
import Leaderboard from "./Leaderboard"
import { Link } from "react-router-dom";


function SolveSubmit({startTime, inventory}){

    const [who, setWho] = useState("")
    const[how, setHow] = useState("")
    const [score, setScore] = useState(0)
    const [submitted, setSubmitted] = useState(false)
    const [playerName, setPlayerName] = useState("")
    const [formError, setFormError] = useState("")
    const [leaderboard, setLeaderboard] = useState([])


    useEffect(() => {
        if (submitted) {
          fetch("http://localhost:3000/scoreboard")
            .then(res => res.json())
            .then(data => setLeaderboard(data))
        }
    }, [submitted])


    function calculateScore() {
        // Base points for correct answers
        let baseScore = 0;
        if (who.toLowerCase().includes("victoria") && 
            (how.toLowerCase().includes("lead") || how.toLowerCase().includes("crystal"))) {
          baseScore = 200;
        } else if (who.toLowerCase().includes("victoria") || 
                  (how.toLowerCase().includes("lead") || how.toLowerCase().includes("crystal"))) {
          baseScore = 100;
        }
    
        // Time bonus (lower time = higher score)
        const endTime = new Date();
        const timeElapsed = (endTime - startTime) / 1000; // Convert to seconds
        const timeBonus = Math.max(300 - timeElapsed, 0); // More points for faster solving
    
        // Clue bonus (more clues = higher score)
        const clueBonus = inventory.length * 50; // 50 points per clue found
    
        const totalScore = baseScore + timeBonus + clueBonus;
        return Math.round(totalScore);
    }
    
    async function handleSubmit(e) {
        e.preventDefault();
        
        if (!playerName) {
            setFormError("FILL OUT ALL FIELDS")
            return;
        }
        

        if (submitted) return; // Prevent multiple submissions
    
        const finalScore = calculateScore();
        setScore(finalScore);
        setSubmitted(true);
    
        fetch("http://localhost:3000/scoreboard", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: playerName,
                score: Number(finalScore),
            })
        })
        .then(res => {
            console.log("Response status:", res.status);  // Let's see the response status
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            return res.json();
        })
        .catch(error => console.log("Error:", error));
    }


    return(

        <div className="submit-container">
            {!submitted ? (<form onSubmit={handleSubmit} className="submit-form">
                <input className="input" disabled={submitted} value={who} onChange={(e) => setWho(e.target.value)} type="text" placeholder="Who did it...?"></input>
                <input className="input" disabled={submitted} value={how} onChange={(e) => setHow(e.target.value)} type="text" placeholder="What killed her...?"></input>
                <input className="input" disabled={submitted} value={playerName} onChange={(e) => setPlayerName(e.target.value)} type="text" placeholder="Enter your name..."/>
                {formError && <p className="error-message">{formError}</p>}
                <button disabled={submitted} className="close-investigation">CLOSE INVESTIGATION</button>
            </form>)
            :(
                <div className="score-results">
                  <h2 className="final-score">Final Score: {score}</h2>
                    <p className="time-taken">Time taken: {Math.round((new Date() - startTime) / 1000)} seconds</p>
                    <p className="clues-found">Clues found: {inventory.length}/20</p>
                    
                <div className="victoria">
                    <img src="/images/sprites/Victoria.png"/>
                    <p>Victoria DeFleur murdered her sister. Isabelle plotted to poison her with iris toxin in her afternoon tea, but Victoria struck first. This ensured she would inherit the estate after Isabelle's death.</p>
                </div>
                <div className="crystal">
                    <img src="/images/sprites/crystal.png"/>
                    <p>She filled Isabelle's heart medications with deadly lead crystal from the chandelier in Isabelle's room, poisoning her slowly for weeks.</p>
                </div>
                    <div className="leaderboard-link-container">
                        <Link className="leaderboard-solve-link" to="/leaderboard">LEADERBOARD</Link>
                    </div>
                </div>
            )}
        </div>
    )
}

export default SolveSubmit
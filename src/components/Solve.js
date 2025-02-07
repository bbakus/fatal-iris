import TypewriterText from "./Typerwriter";
import Home from "./Home"
import { useState } from "react";
import SolveSubmit from "./SolveSubmit";

function Solve({startTime, onBack, inventory}){

    const [forward, setForward] = useState(false)

    function handleContinue(){
        setForward(true)

    }

    return(
        <div>
            {forward ? <SolveSubmit startTime={startTime} inventory={inventory} /> : 
                <div className="solve-container">
                <TypewriterText
                    text="Are you sure? You only get one opportunity. There is no going back."
                    speed={20}/>
                    <button onClick={onBack} className="back-button">BACK</button>
                <button onClick={handleContinue} className="continue-button">CONTINUE</button>
                </div>
             }
        </div>
    )
}

export default Solve



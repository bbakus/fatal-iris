import React, {useState} from "react";
import FatalIris from "./FatalIris";
import TypewriterText from "./Typerwriter";

function MansionIntro(){

    const [skipIntro, setSkipIntro] = useState(false)

    function handleSkip(){

        setSkipIntro(true)
    }

    if (skipIntro) {
        return <FatalIris/>;
    }

    return(
        <div className="intro-container">
            <div className="story-intro-container">
            <button onClick={handleSkip} className="skip-button">SKIP</button>
            <TypewriterText 
                text="Isabelle DeFleur is dead. The year is 1922, and you, a private investigator, have been summoned on behalf of her son, Noah DeFleur, to unravel the circumstances of his mother's untimely demise. The wealthy widow was found in her grand estate, sprawled across the Persian carpet of her study, an iris flower placed with deliberate care upon her still form.
                        Noah's urgent wire spoke of family tensions in her final days. But most curious was his insistence that you examine her rooms, four in particular."
                speed={20}
            />
            </div>
            <div className="mansion-container">
                <img src="/images/Mansion.png" className="mansion-image"/>
            </div>
        </div>
    )
}

export default MansionIntro
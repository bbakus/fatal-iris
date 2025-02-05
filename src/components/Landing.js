import React, {useState} from "react";
import FatalIris from "./FatalIris";
import MansionIntro from "./MansionIntro";
import FallenIris from "./FallenIrisLanding";


function Landing(){

    const [landingPage, setLandingPage] = useState(true)

    return (
        <div>
            {landingPage ? <FallenIris setLandingPage={setLandingPage}/> : <MansionIntro />}
            {/* <FallenIris/>
            <MansionIntro/> */}
        </div>
    )
}






export default Landing
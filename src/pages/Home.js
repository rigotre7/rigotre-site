import React from "react";

import ExperienceIntro from "../components/home/ExperienceIntro";
import Experience from "../components/home/Experience";
import Skills from "../components/home/Skills";

const Home = () => {
    return (
        <React.Fragment>
            <ExperienceIntro/>
            <Experience/>
            <Skills/>
        </React.Fragment>
    );
}

export default Home;
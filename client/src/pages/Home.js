import React from "react";

import ExperienceIntro from "../components/home/ExperienceIntro";
import Experience from "../components/home/Experience";
import Skills from "../components/home/Skills";

const Home = () => {
    return (
        <div className="page-content-wrapper">
            <ExperienceIntro/>
            <Experience/>
            <Skills/>
        </div>
    );
}

export default Home;
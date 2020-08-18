import React from "react";

import ExperienceHeader from "../components/home/ExperienceHeader";
import Experience from "../components/home/Experience";
import Skills from "../components/home/Skills";

const Home = () => {
    return (
        <React.Fragment>
            <ExperienceHeader/>
            <Experience/>
            <Skills/>
        </React.Fragment>
    );
}

export default Home;
import React from "react";

import ExperienceHeader from "../components/ExperienceHeader";
import Experience from "../components/Experience";
import Skills from "../components/Skills";

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
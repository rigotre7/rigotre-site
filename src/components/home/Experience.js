import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

import ExperienceRow from "./ExperienceRow";
import ExperienceHeader from "./ExperienceHeader";
import maxaveraImage from "./../../assets/experience/maxavera.png";
import analyticsImage from "./../../assets/experience/analytics.png";
import webSchedulerImage from "./../../assets/experience/webscheduler.JPG";
import naturenetImage from "./../../assets/experience/naturenet.JPG";
import {
    PG_SUBHEADER,
    MAXAVERA_DESC,
    ANALYTICS_DESC,
    WS_BULLET_ONE,
    WS_BULLET_TWO, 
    MAXAVERA_LINK,
    ANALYTICS_LINK,
    WS_LINK,
    NN_SUBHEADER,
    NN_LINK
} from "../../constants/constants";

const Experience = () => {
    const bulletPoints = [];
    bulletPoints.push(WS_BULLET_ONE);
    bulletPoints.push(WS_BULLET_TWO);
    
    return (
        <Jumbotron fluid className="experience-jumbotron">
            <h1 style={{textAlign: "center"}}>Experience</h1>
            <Container>
                <ExperienceHeader
                    header={"Prometheus Group - Full-Stack Web Developer"}
                    subheader={PG_SUBHEADER}
                />
                <ExperienceRow
                    image={maxaveraImage}
                    header={"Maxavera"}
                    text={MAXAVERA_DESC}
                    link={MAXAVERA_LINK}
                />
                <ExperienceRow
                    image={analyticsImage}
                    header={"Analytics"}
                    text={ANALYTICS_DESC}
                    link={ANALYTICS_LINK}
                />
                <ExperienceRow
                    image={webSchedulerImage}
                    header={"Web Scheduler"}
                    text={"Wrote custom functionality for Prometheus’ Web Scheduler."}
                    bullets={bulletPoints}
                    link={WS_LINK}
                />
            </Container>
            <Container>
                <ExperienceHeader
                    header={"UNC Charlotte - Android Developer"}
                />
                <ExperienceRow
                    image={naturenetImage}
                    header={"NatureNet"}
                    text={NN_SUBHEADER}
                    link={NN_LINK}
                />
            </Container>
        </Jumbotron>
    );
}

export default Experience;
import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

import ExperienceRow from "./ExperienceRow";
import ExperienceHeader from "./ExperienceHeader";
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
    NN_LINK,
    MAXAVERA_URL,
    ANALYTICS_URL,
    WS_URL,
    NN_URL
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
                    image={MAXAVERA_URL}
                    header={"Maxavera"}
                    text={MAXAVERA_DESC}
                    link={MAXAVERA_LINK}
                />
                <ExperienceRow
                    image={ANALYTICS_URL}
                    header={"Analytics"}
                    text={ANALYTICS_DESC}
                    link={ANALYTICS_LINK}
                />
                <ExperienceRow
                    image={WS_URL}
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
                    image={NN_URL}
                    header={"NatureNet"}
                    text={NN_SUBHEADER}
                    link={NN_LINK}
                />
            </Container>
        </Jumbotron>
    );
}

export default Experience;
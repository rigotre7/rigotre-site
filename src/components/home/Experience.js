import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

import ExperienceRow from "./ExperienceRow";
import ExperienceHeader from "./ExperienceHeader";
import maxaveraImage from "./../../assets/experience/maxavera.png";
import analyticsImage from "./../../assets/experience/analytics.png";
import webSchedulerImage from "./../../assets/experience/webscheduler.JPG";
import naturenetImage from "./../../assets/experience/naturenet.JPG";

const Experience = () => {
    const bulletPoints = [];
    bulletPoints.push("PP Simulation Mode – Allows users to simulate scheduling of Production Orders to compare with the current schedule.");
    bulletPoints.push("PRT Capacities – Implemented the ability for users to view resource capacity/usage based on scheduled orders.");
    
    return (
        <Jumbotron fluid className="experience-jumbotron">
            <h1 style={{textAlign: "center"}}>Experience</h1>
            <Container>
                <ExperienceHeader
                    header={"Prometheus Group - Full-Stack Web Developer"}
                    subheader={"Regularly take part in multiple software development phases such as requirement gathering, design, development, and code reviews."}
                />
                <ExperienceRow
                    image={maxaveraImage}
                    header={"Maxavera"}
                    text={"Wrote custom solutions for a variety of customers related to loading, transforming, and transferring customer-specific data between ERP systems. Systems that I have worked with include but are not limited to: Primavera P6, Maximo, SAP, and a variety of in-house solutions."}
                    link={"https://www.prometheusgroup.com/solutions/shutdown-turnaround-and-outage"}
                />
                <ExperienceRow
                    image={analyticsImage}
                    header={"Analytics"}
                    text={"Worked on Prometheus’ Analytics solution which is used to track plant maintenance work. Prometheus Analytics takes customer data and creates custom interactive data visualizations using D3. This involved a full-stack array of work from writing custom endpoints (Spring), creating new UI components (React), and writing complex SQL queries to pull customer data (PostgreSQL)."}
                    link={"https://www.prometheusgroup.com/solutions/reporting-and-analytics"}
                />
                <ExperienceRow
                    image={webSchedulerImage}
                    header={"Web Scheduler"}
                    text={"Wrote custom functionality for Prometheus’ Web Scheduler."}
                    bullets={bulletPoints}
                    link={"https://www.prometheusgroup.com/solutions/planning-and-scheduling"}
                />
            </Container>
            <Container>
                <ExperienceHeader
                    header={"UNC Charlotte - Android Developer"}
                />
                <ExperienceRow
                    image={naturenetImage}
                    header={"NatureNet"}
                    text={"Worked as an Android Developer for NatureNet, a research project that is using mobile applications to explore the impact of these applications on environmental citizen science initiatives. Available on web, iOS, and Android."}
                    link={"https://www.researchgate.net/publication/326579833_Designing_with_and_for_the_Crowd_A_Cognitive_Study_of_Design_Processes_in_NatureNet"}
                />
            </Container>
        </Jumbotron>
    );
}

export default Experience;
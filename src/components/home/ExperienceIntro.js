import React, { useRef, useEffect } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

import cv from "./../../assets/experience/cv.pdf";
import SocialLinks from "./../home/SocialLinks";
import { setupFadeInObservor } from "../../util/Observors";

const ExperienceIntro = () => {
    const ref = useRef();

    useEffect(() => {
        setupFadeInObservor(ref.current);
    });
    return (
        <Jumbotron fluid>
            <Container ref={ref} className="fade-in">
                <Row className={"justify-content-center"}>
                    <Col align={"center"} xs={12} s={12} md={8}>
                        <h1>Rodrigo Trejo Contreras</h1>
                        <p>Full-Stack Web Developer focused on developing my skills and working on fun and exciting projects.
                            I enjoy tackling difficult problems and growing through each experience.</p>
                        <h4>UNC Charlotte - BS Computer Science</h4>
                        <SocialLinks className="social-links"/>
                        <Button
                            variant="primary"
                            size="lg"
                            href={cv}
                            download="Rodrigo Trejo CV"
                        >
                            CV / Resume (PDF)
                        </Button>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    ); 
}

export default ExperienceIntro;
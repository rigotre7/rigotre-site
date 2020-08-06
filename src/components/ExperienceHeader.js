import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

import profilePic from "./../assets/rtc.jpg";
import cv from "./../assets/cv.pdf";
import SocialLinks from "./SocialLinks";

const ExperienceHeader = () => {
    return (
        <Jumbotron fluid className="experience-header">
            <Container>
                <Row>
                    <Col className="col-md-4 col-sm-12 col-12">
                        <Image className="image" src={profilePic} rounded/>
                    </Col>
                    <Col className="col-md-8 col-sm-12 col-12">
                        <h1>Rodrigo Trejo Contreras</h1>
                        <p>Full-Stack Web Developer focused on developing my skills and working on fun and exciting projects.
                            I enjoy tackling difficult problems and growing through each experience.</p>
                        <h5>UNC Charlotte - BS Computer Science</h5>
                        <SocialLinks/>
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

export default ExperienceHeader;
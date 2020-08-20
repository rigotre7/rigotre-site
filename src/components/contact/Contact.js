import React from "react";

import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { FormContainer as Form } from "./Form";
import SocialLinks from "../home/SocialLinks";

const Contact = () => {
    return (
        <div className="page-content-wrapper">
            <Jumbotron style={{height: "inherit", marginBottom: "0"}}>
                <Container>
                    <h3 style={{textAlign: "center"}}>Contact Me</h3>
                    <Row>
                        <Col xs={12} s={12} md={6}>
                            <p className="contact-text">Send me a message below or connect with me on LinkedIn!</p>
                        </Col>
                        <Col xs={12} s={12} md={6}>
                            <SocialLinks className="contact-social-links"/>
                        </Col>
                    </Row>
                    <Form/>
                </Container>
            </Jumbotron>
        </div>
    );
}

export default Contact;
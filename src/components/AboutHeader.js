import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const AboutHeader = () => {
    return(
        <Jumbotron fluid className="no-bottom-margin">
            <Container>
                <Row>
                    <Col>
                        <h1 style={{textAlign: "center"}}>About Me</h1>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
}

export default AboutHeader;
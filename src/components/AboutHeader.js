import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

const AboutHeader = () => {
    return(
        <Jumbotron fluid className="no-bottom-margin">
            <Container>
                <h1>About Me</h1>
            </Container>
        </Jumbotron>
    );
}

export default AboutHeader;
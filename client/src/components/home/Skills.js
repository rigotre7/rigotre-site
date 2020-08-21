import React, { useRef, useEffect } from "react";

import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { setupFadeInObservor } from "./../../util/Observors";

const Skills = ()=> {
    const ref = useRef();

    useEffect(() => {
        setupFadeInObservor(ref.current);
    });
    return (
        <Jumbotron fluid className="skills-jumbotron">
            <h1 style={{textAlign: "center"}}>Skills</h1>
            <Container ref={ref} className="fade-in">
                <Row className="skills">
                    <Col className="col-md-6 col-sm-12 col-12">
                        <h3>Languages</h3>
                        <ul>
                            <li>Javascript/TypeScript</li>
                            <li>Java</li>
                        </ul>
                    </Col>
                    <Col className="col-md-6 col-sm-12 col-12">
                        <h3>Frameworks/Libraries</h3>
                        <ul>
                            <li>React</li>
                            <li>Redux</li>
                            <li>Spring/Hibernate</li>
                            <li>D3</li>
                            <li>Ag-Grid</li>
                        </ul>
                    </Col>
                </Row>
                <Row className="skills">
                    <Col className="col-md-6 col-sm-12 col-12">
                        <h3>Developer Tools</h3>
                        <ul>
                            <li>Visual Studio</li>
                            <li>Spring Tool Suite</li>
                            <li>Eclipse</li>
                            <li>Git</li>
                            <li>Jira</li>
                            <li>GitLab/GitHub</li>
                        </ul>
                    </Col>
                    <Col className="col-md-6 col-sm-12 col-12">
                        <h3>Systems</h3>
                        <ul>
                            <li>Primavera P6</li>
                            <li>SAP</li>
                            <li>Maximo</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
}

export default Skills;
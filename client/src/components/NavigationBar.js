import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { LOGO_URL } from "../constants/constants";
import { IKImage } from "imagekitio-react";

const NavigationBar = () => {
    return (
        <Navbar id="navbar" fixed="top" variant="light" expand="sm" className="header">
            <Container>
                <Navbar.Brand href="/">
                    <IKImage
                        publicKey={process.env.REACT_APP_PUBLIC_API_KEY}
                        urlEndpoint="https://ik.imagekit.io/rigotre"
                        path={LOGO_URL}
                        transformation={[{
                            height: 30,
                            width: 30,
                        }]}
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                    <Nav.Link href="/contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;
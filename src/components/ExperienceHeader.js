import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

import profilePic from "./../assets/rtc.jpg";
import cv from "./../assets/cv.pdf";
import SocialLinks from "./SocialLinks";

class ExperienceHeader extends React.Component {
    constructor(props) {
        super(props);
        
        // TODO: Use hooks
        let smallScreenAtTopOfPage = false;

        window.onresize = () => {
            const mediaQuery = window.matchMedia( "(min-width: 768px)");
            const atTopOfPage = window.scrollY === 0;
            const isSmallScreen = !mediaQuery.matches;

            if (isSmallScreen && atTopOfPage && !this.state.smallScreenAtTopOfPage) {
                this.setState({
                    smallScreenAtTopOfPage: true,
                });
            } else if (!isSmallScreen && this.state.smallScreenAtTopOfPage) {
                this.setState({
                    smallScreenAtTopOfPage: false,
                });
            }
        };

        window.onscroll = () => {
            const mediaQuery = window.matchMedia( "(min-width: 768px)");
            const atTopOfPage = window.scrollY === 0;
            const isSmallScreen = !mediaQuery.matches;

            if (atTopOfPage && isSmallScreen && !this.state.smallScreenAtTopOfPage) {
                this.setState({
                    smallScreenAtTopOfPage: true,
                })
            } else if (!atTopOfPage && this.state.smallScreenAtTopOfPage) {
                this.setState({
                    smallScreenAtTopOfPage: false,
                })
            }
        }

        const mediaQuery = window.matchMedia( "(min-width: 768px)");
        smallScreenAtTopOfPage = !mediaQuery.matches;

        this.state = {
            smallScreenAtTopOfPage,
        };
    }
    
    render() {
        console.warn("render");
        return (
            <Jumbotron id="intro-wrapper" fluid className="experience-header">
                <Container>
                    <Row>
                        <Col className="col-md-4 col-sm-12 col-12">
                            <Image className="image" src={profilePic} rounded/>
                            {this.state.smallScreenAtTopOfPage &&
                                <FontAwesomeIcon
                                    icon={faAngleDown}
                                    className={"scroll-button"}
                                    size="3x"
                                    onClick={this.onScrollButtonClick}
                                />
                            }
                        </Col>
                        <Col className="col-md-8 col-sm-12 col-12">
                            <div id="scroll-break"></div>
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

    onScrollButtonClick() {
        console.warn("scroll");
        const scrollBreakElement = document.querySelector('#scroll-break');
        const navBar = document.querySelector('#navbar');
        const scrollToYPos =
            scrollBreakElement.getBoundingClientRect().top - navBar.getBoundingClientRect().height; 
        window.scroll({top: scrollToYPos, behavior: "smooth"})
    }
}

export default ExperienceHeader;
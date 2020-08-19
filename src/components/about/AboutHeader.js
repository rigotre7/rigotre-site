import React, { useState, useRef, useEffect } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import ExperienceHeader from "../home/ExperienceHeader";

const AboutHeader = () => {
    const [backgroundPosY, setBackgroundPosY] = useState(0);
    const ref = useRef();

    useEffect(() => {
        window.onscroll = () => {
            const scrollPos = ref.current.getBoundingClientRect().top;

            // Only change backgroundPos if our header is in view
            // since that's the only time it matters
            if ((scrollPos * -1) < window.innerHeight) {
                setBackgroundPosY(scrollPos);
            }
        }
    });

    return(
        <Jumbotron
            fluid
            className="about-me-header"
            style={{
                backgroundPosition: `60% ${backgroundPosY / 10}px`
            }}
            ref={ref}
        >
            <Container>
                <ExperienceHeader
                    header={"My name is Rodrigo Trejo Contreras."}
                    subheader={"I'm originally from Durango, Mexico. I believe life is all about experiences and spreading love." + 
                    "I strive to constantly grow in my profession and as a person. In my free time I like to explore mountains," +
                    "visit new places, and chase new thrills."}
                />
            </Container>
        </Jumbotron>
    );
}

export default AboutHeader;
import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import ExperienceHeader from "../home/ExperienceHeader";

import { ABOUT_ME } from "../../constants/constants";

class AboutHeader extends React.Component {

    constructor(props) {
        super(props);

        this.ref = React.createRef();
        this.stylingFunction = this.stylingFunction.bind(this);  
    }

    componentDidMount() {
        window.addEventListener("scroll", this.stylingFunction);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.stylingFunction);
    }

    render() {
        return(
            <Jumbotron
                fluid
                className="about-me-header"
                style={{
                    backgroundPosition: `60% 0px`,
                    backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0) 100%, rgba(255, 255, 255, 1) 100%), url("https://ik.imagekit.io/rigotre/about/highlands_E0jWK5CxO.jpg")`
                }}
                ref={this.ref}
            >
                <Container>
                    <ExperienceHeader
                        header={"My name is Rodrigo Trejo Contreras."}
                        subheader={ABOUT_ME}
                        shorten={true}
                    />
                </Container>
            </Jumbotron>
        );
    }

    stylingFunction = () => {
        const scrollPos = this.ref.current.getBoundingClientRect().top;
        const height = this.ref.current.getBoundingClientRect().height;
        const percentTravel = (scrollPos * -1) / height;
        let end = 100;
        
        // Only change background properties if our header is in view
        // since that's the only time it matters
        if ((scrollPos * -1) < window.innerHeight) {
            // Threshold for starting to fade the background (63% scrolled this element)
            if (percentTravel > .63) {
                end = (1 - percentTravel) * 100;
                this.ref.current.style.backgroundPosition = `60% ${scrollPos / 10}px`;
                this.ref.current.style.backgroundImage =
                    `linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, ` +
                    `rgba(255, 255, 255, 1) ${end}%), url("https://ik.imagekit.io/rigotre/about/highlands_E0jWK5CxO.jpg")`;
            } else {
                this.ref.current.style.backgroundPosition = `60% ${scrollPos / 10}px`;
                this.ref.current.style.backgroundImage =
                    `linear-gradient(to bottom, rgba(255, 255, 255, 0) 100%, ` +
                    `rgba(255, 255, 255, 1) 100%), url("https://ik.imagekit.io/rigotre/about/highlands_E0jWK5CxO.jpg")`;
            }
        }
    }
}

export default AboutHeader;
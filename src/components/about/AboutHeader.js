import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import ExperienceHeader from "../home/ExperienceHeader";

import headerImage from "./../../assets/about/highlands.jpg";

class AboutHeader extends React.Component {

    constructor(props) {
        super(props);

        this.ref = React.createRef();
        this.stylingFunction = this.stylingFunction.bind(this);
        this.state = {
            backgroundPosY: 0,
            backgroundFade: {
                start: 100,
                end: 100,
            }
        };    
    }

    componentDidMount() {
        window.addEventListener("scroll", this.stylingFunction);
    }

    componentWillMount() {
        window.removeEventListener("scroll", this.stylingFunction);
    }

    render() {
        return(
            <Jumbotron
                fluid
                className="about-me-header"
                style={{
                    backgroundPosition: `60% ${this.state.backgroundPosY / 10}px`,
                    backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0) ${this.state.backgroundFade.start}%, rgba(255, 255, 255, 1) ${this.state.backgroundFade.end}%), url("${headerImage}")`
                }}
                ref={this.ref}
            >
                <Container>
                    <ExperienceHeader
                        header={"My name is Rodrigo Trejo Contreras."}
                        subheader={"I'm originally from Durango, Mexico. I believe life is all about experiences and spreading love." + 
                        "I strive to constantly grow in my profession and as a person. In my free time I like to explore mountains," +
                        "visit new places, and chase new thrills."}
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
                this.setState({
                    backgroundPosY: scrollPos,
                    backgroundFade: {
                        start: 0,
                        end,
                    },
                });
            } else {
                this.setState({
                    backgroundPosY: scrollPos,
                    backgroundFade: {
                        start: 100,
                        end: 100,
                    },
                })
            }
        }
    }
}

export default AboutHeader;
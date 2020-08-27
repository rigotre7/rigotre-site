import React from "react";
import { IKImage } from "imagekitio-react";

import Jumbotron from "react-bootstrap/Jumbotron";
import ExperienceHeader from "../home/ExperienceHeader";

import {
    ABOUT_ME,
    HEADER_URL,
} from "../../constants/constants";

const AboutHeader = () => {
    return(
        <Jumbotron
            fluid
            className="about-me-header"
        >
            <IKImage
                publicKey={process.env.REACT_APP_PUBLIC_API_KEY}
                urlEndpoint="https://ik.imagekit.io/rigotre"
                path={HEADER_URL}
            />
            <ExperienceHeader
                className={"about-me-desc"}
                header={"My name is Rodrigo Trejo Contreras."}
                subheader={ABOUT_ME}
                shorten={true}
            />
        </Jumbotron>
    );
}

export default AboutHeader;
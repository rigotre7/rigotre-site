import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as Brands from "@fortawesome/free-brands-svg-icons";

const SocialLinks = () => {
    return (
        <ul className="list-inline">
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/rtrejo/"
            >
                <FontAwesomeIcon
                    icon={Brands.faLinkedin}
                    size="3x"
                />
            </a>
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/rigotre7"
            >
                <FontAwesomeIcon
                    icon={Brands.faGithub} 
                    size="3x"
                />
            </a>
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.hackerrank.com/rigotre7"
            >
                <FontAwesomeIcon
                    icon={Brands.faHackerrank} 
                    size="3x"
                />
            </a>
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://stackoverflow.com/users/7142829/rigotre"
            >
                <FontAwesomeIcon
                    icon={Brands.faStackOverflow} 
                    size="3x"
                />
            </a>
        </ul>
    );
}

export default SocialLinks;
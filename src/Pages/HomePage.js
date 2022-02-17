import React from "react";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function HomePage() {
    return (
        <div className="HomePage">
            <header className="hero">
                <h1 className="hero-text">
                    Oi, eu sou
                    <span> Evelin Naimayer.</span>
                </h1>
                <p className="h-sub-text">
                    Acredito que as coisas podem ser feitas de outra maneira e
                    que vale a pena tentar{" "}
                    <blockquote> -Zaha Hadid </blockquote>
                </p>
                <div className="icons">
                    <a
                        href="https://www.facebook.com/evelin.naimayer"
                        className="icon-holder"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon
                            icon={faFacebook}
                            className="icon fb"
                        />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/evelin-naimayer-01a05b232/"
                        className="icon-holder"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon
                            icon={faLinkedin}
                            className="icon gh"
                        />
                    </a>
                    <a
                        href="https://www.instagram.com/evelinnaimayer/"
                        className="icon-holder"
                        target="_blank"
                        rel="noreferrer"
                    >
                        {" "}
                        <FontAwesomeIcon
                            icon={faInstagram}
                            className="icon yt"
                        />
                    </a>
                </div>
            </header>
        </div>
    );
}

export default HomePage;

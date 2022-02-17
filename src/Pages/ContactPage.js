import React from "react";
import ContactItem from "../Components/ContactItem";
import phone from "../img/phone.svg";
import email from "../img/emailme.svg";
import location from "../img/location.svg";
import Tittle from "../Components/Tittle";

function ContactPage() {
    return (
        <div>
            <div className="title">
                <Tittle title={"Sobre mim"} span={"Sobre mim"} />
            </div>
            <div className="ContactPage">
                <div className="map-sect">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d515.2636451792946!2d-53.83405436057508!3d-29.683043083169707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9503ccafc5667e6b%3A0x299da5cf505ee9b4!2sR.%20Caldas%20J%C3%BAnior%2C%2048%20-%20Passo%20D&#39;areia%2C%20Santa%20Maria%20-%20RS%2C%2097020-100!5e0!3m2!1spt-BR!2sbr!4v1644995737064!5m2!1spt-BR!2sbr"
                        width="600"
                        height="450"
                        frameBorder="0"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        aria-hidden="false"
                        tabIndex="0"
                    ></iframe>
                </div>
                <div className="contact-sect">
                    <ContactItem
                        icon={phone}
                        text1={"+55 92158424"}
                        title={"Telefone"}
                    />
                    <ContactItem
                        icon={email}
                        text1={"evelinnaimayer@gmail.com"}
                        title={"Email"}
                    />
                    <ContactItem
                        icon={location}
                        text1={"Rua Caldas Júnior,48 Passo D'Areia"}
                        text2={"Santa Maria/RS"}
                        title={"Endereço"}
                    />
                </div>
            </div>
        </div>
    );
}

export default ContactPage;

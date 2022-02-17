import React from "react";
import about from "../img/about.jpeg";
import PDF from "../img/Curriculo.pdf";
import { Link } from "react-router-dom";

function ImageSection() {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={about} alt="" />
            </div>
            <div className="about-info">
                <h4>
                    Eu sou<span> Evelin Naimayer</span>
                </h4>
                <p className="about-text">
                    Sou estudante de Arquitetura e Urbanismo na Universidade
                    Franciscana e estou cursando o 7º semestre. Tenho afinidade
                    com arquitetura de interiores, paisagismo e residencial. No
                    momento estou buscando desenvolver minhas habilidades de
                    modelagem com o Revit e me aperfeiçoar na renderização.
                </p>
                <div className="about-details">
                    <div className="left-section">
                        <p>Nome Completo</p>
                        <p>Idade</p>
                        <p>Nacionalidade</p>
                        <p>Linguagens</p>
                        <p>Endereço</p>
                    </div>
                    <div className="right-section">
                        <p>: Evelin Coden Naimayer</p>
                        <p>: 22</p>
                        <p>: Brasileira</p>
                        <p>: Português, Inglês</p>
                        <p>: Rua Caldas Júnior, 48 Passo D'Areia</p>
                    </div>
                </div>

                <a href={PDF} download="Currículo Evelin Naimayer">
                    {" "}
                    <button className="btn">Download Currículo</button>
                </a>
            </div>
        </div>
    );
}

export default ImageSection;

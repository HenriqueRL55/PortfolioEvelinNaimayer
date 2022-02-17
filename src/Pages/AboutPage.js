import React from "react";
import Tittle from "../Components/Tittle";
import ImageSection from "../Components/ImageSection";
import SkillsSection from "../Components/SkillsSection";
import ServicesSection from "../Components/ServicesSection";
import render from "../img/Renderização.png";
import autoral from "../img/Autoral.png";
import detalhamento from "../img/Detalhamento.png";
import modelagem from "../img/Modelagem.png";

function AboutPage() {
    return (
        <div className="AboutPage">
            <Tittle title={"Sobre mim"} span={"Sobre mim"} />
            <ImageSection />
            <Tittle title={"Habilidades"} span={"Habilidades"} />
            <div className="skillsContainer">
                <SkillsSection skill={"Revit"} progress={"60%"} width={"60%"} />
                <SkillsSection
                    skill={"Lumion"}
                    progress={"60%"}
                    width={"60%"}
                />
                <SkillsSection
                    skill={"SketchUp"}
                    progress={"80%"}
                    width={"80%"}
                />
                <SkillsSection
                    skill={"Autocad"}
                    progress={"100%"}
                    width={"100%"}
                />
                <SkillsSection
                    skill={"Detalhamento"}
                    progress={"50%"}
                    width={"50%"}
                />
                <SkillsSection
                    skill={"Desenho Técnico"}
                    progress={"100%"}
                    width={"100%"}
                />
                <SkillsSection
                    skill={"Pacote Office"}
                    progress={"60%"}
                    width={"60%"}
                />
            </div>

            <Tittle title={"Projetos"} span={"Projetos"} />
            <div className="servives-container">
                <a href="#modelagem">
                    <ServicesSection
                        image={modelagem}
                        title={"Modelagem"}
                        text={
                            "Projeto de Modelagem e Representação gráfica de quarto infantil. Desenvolvido em workshop online. Software utilizado: Revit    *Projeto não autoral"
                        }
                    />
                </a>
                <a href="#Renderização">
                    <ServicesSection
                        image={render}
                        title={"Renderização"}
                        text={
                            "Projeto de renderização de imagem de quarto infantil. Desenvolvido em workshop online. Software utilizado: Lumion  *Projeto não autoral"
                        }
                    />
                </a>
            </div>
            <div className="servives-container">
                <a href="#Autoral">
                    <ServicesSection
                        image={autoral}
                        title={"Autoral"}
                        text={
                            "Projeto de painel para ambiente externo para desenvolvimento de composição, modelagem e paisagismo. Este projeto foi pensado no estilo Boho, cumprindo a função de privacidade para corredor de entrada e a função decorativa, com estatueta do Buda em meio a natureza, fazendo alusão aos jardins do estilo zen em forma de painel."
                        }
                    />
                </a>
                <a href="#Detalhamento">
                    <ServicesSection
                        image={detalhamento}
                        title={"Detalhamento"}
                        text={
                            "Projeto de modelagem e detalhamento de marcenaria para cozinha. Desenvolvido em workshop online. Software: SketchUp    *Projeto não autoral,"
                        }
                    />
                </a>
            </div>
        </div>
    );
}

export default AboutPage;

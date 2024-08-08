// eslint-disable-next-line no-unused-vars
import React from "react";
import {
  Container,
  Header,
  SobreMi,
  StyledInput,
  SendButton,
  CopyButton,
  OpenCV,
  Social,
  SocialRow,
  SocialContent,
  OpenLinkedin,
  OpenGithub,
  Proyectos,
  Proyecto,
  ProyectosRow,
  TecnologiasProyectoRow,
  TecnologiaProyecto,
  Habilidades,
  HabilidadesRow,
  Habilidad,
  Recomendaciones,
  Info,
  RecomendacionesRow,
  Recomendacion,
  MoreInfo,
} from "./App.styles";
import image from "./assets/159159635.png";
import cv from "./assets/Currículum.pdf";
import purgatio from "./assets/purgatio.png";
import purgatioLobby from "./assets/lobby.png";
import { VscSend } from "react-icons/vsc";
import { FaRegCopy } from "react-icons/fa";
import { MdContactPage } from "react-icons/md";
import { GrLinkedin } from "react-icons/gr";
import { FaSquareGithub } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { BiLogoSpringBoot } from "react-icons/bi";
import { SiMysql } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaJava } from "react-icons/fa";

const App = () => {
  const handleCopy = () => {
    const input = document.getElementById("email");
    navigator.clipboard.writeText(input.value);
  };

  const handleOpenCV = () => {
    window.open(cv, "_blank");
  };

  const handleOpenLinkedin = () => {
    const linkedin = "https://www.linkedin.com/in/sergi-9413172b7/";
    window.open(linkedin, "_blank");
  };

  const handleOpenGithub = () => {
    const github = "https://github.com/itrevixx";
    window.open(github, "_blank");
  };

  const handlePurgatio = () => {
    const purgatio = "https://www.purgatio.es";
    window.open(purgatio, "_blank");
  };

  return (
    <Container>
      <Header>
        <a href="#sobre-mi">Sobre Mi</a>
        <a href="#social">Social</a>
        <a href="#proyectos">Proyectos</a>
        <a href="#habilidades">Habilidades</a>
        <a href="#testimonios">Testimonios</a>
      </Header>
      <h2 id="sobre-mi">Sobre Mi</h2>
      <Info>
        <SobreMi>
          <img src={image} alt="Sergi Treviño" />
          <div>
            <h3>Sergi Treviño</h3>
            <p>
              Desarrollador Full-Stack, apasionado por la programación y el
              desarrollo tecnológico.
            </p>
          </div>
        </SobreMi>
        <MoreInfo>
          <li>
            <h3>CV</h3>
            <OpenCV onClick={handleOpenCV}>
              <MdContactPage />
            </OpenCV>
          </li>
          <li>
            <h3>Mail</h3>
            <StyledInput
              type="text"
              id="email"
              placeholder="itrevixx@gmail.com"
              disabled
              value="itrevixx@gmail.com"
            />
            <a href="mailto:itrevixx@gmail.com">
              <SendButton>
                <VscSend />
              </SendButton>
            </a>
            <CopyButton onClick={handleCopy}>
              <FaRegCopy />
            </CopyButton>
          </li>
        </MoreInfo>
      </Info>
      <Social>
        <h2 id="social">Social</h2>
        <SocialRow>
          <OpenLinkedin onClick={handleOpenLinkedin}>
            <SocialContent>
              <GrLinkedin />
              <h3>Linkedin</h3>
            </SocialContent>
          </OpenLinkedin>
          <OpenGithub onClick={handleOpenGithub}>
            <SocialContent>
              <FaSquareGithub />
              <h3>Github</h3>
            </SocialContent>
          </OpenGithub>
        </SocialRow>
      </Social>
      <Proyectos>
        <h2 id="proyectos">Proyectos</h2>
        <ProyectosRow>
          <Proyecto>
            <h3>Purgatio</h3>
            <p>
              Juego para jugar con amigos o desconocidos. En el cual tendras que
              acertar el pecado del otro para que pringue.
            </p>
            <p>
              El proyecto se hizo con un equipo de 5, me encargue principalmente
              de la parte del back, aunque ayudé a implemntar algunas
              fucnionalidades en el front
            </p>
            <TecnologiasProyectoRow>
              <TecnologiaProyecto>
                <FaReact /> <p>React</p>
              </TecnologiaProyecto>
              <TecnologiaProyecto>
                <BiLogoSpringBoot /> <p>SpringBoot</p>
              </TecnologiaProyecto>
              <TecnologiaProyecto>
                <IoLogoJavascript /> <p>JavaScript</p>
              </TecnologiaProyecto>
              <TecnologiaProyecto>
                <SiMysql /> <p>Mysql</p>
              </TecnologiaProyecto>
              <TecnologiaProyecto>
                <FaHtml5 /> <p>Html</p>
              </TecnologiaProyecto>
              <TecnologiaProyecto>
                <FaCss3Alt /> <p>CSS</p>
              </TecnologiaProyecto>
            </TecnologiasProyectoRow>
            <img onClick={handlePurgatio} src={purgatio} alt="" />
            <img onClick={handlePurgatio} src={purgatioLobby} alt="" />
          </Proyecto>
        </ProyectosRow>
      </Proyectos>
      <Habilidades>
        <h2 id="habilidades">Habilidades</h2>
        <br />
        <h3>Fontend</h3>
        <HabilidadesRow>
          <Habilidad>
            <FaReact size="2rem" /> <p>React</p>
          </Habilidad>
          <Habilidad>
            <IoLogoJavascript size="2rem" /> <p>JavaScript</p>
          </Habilidad>
          <Habilidad>
            <FaHtml5 size="2rem" /> <p>Html</p>
          </Habilidad>
          <Habilidad>
            <FaCss3Alt size="2rem" /> <p>CSS</p>
          </Habilidad>
        </HabilidadesRow>
        <h3>Backend</h3>
        <HabilidadesRow>
          <Habilidad>
            <FaJava size="2rem" />
            <p>Java</p>
          </Habilidad>
          <Habilidad>
            <BiLogoSpringBoot size="2rem" /> <p>SpringBoot</p>
          </Habilidad>
        </HabilidadesRow>
        <h3>Base de Datos</h3>
        <HabilidadesRow>
          <Habilidad>
            <SiMysql size="2rem" /> <p>Mysql</p>
          </Habilidad>
        </HabilidadesRow>
      </Habilidades>
      <Recomendaciones>
        <h2 id="testimonios">Testimonios</h2>
        <RecomendacionesRow>
          <Recomendacion>
            <p></p>
          </Recomendacion>
        </RecomendacionesRow>
      </Recomendaciones>
    </Container>
  );
};

export default App;

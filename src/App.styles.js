import styled from "styled-components";

export const Container = styled.div`
  width: 1024px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(11, 13, 43, 0.96);

  @media (max-width: 600px) {
    width: 100%; /* Ocupa todo el ancho en pantallas pequeñas */
    padding: 10px; /* Añade un poco de padding para los márgenes */
  }
`;

export const Header = styled.ul`
  list-style-type: none;
  padding: 10px 20px;
  display: flex;
  gap: 20px;
  margin-bottom: 50px;

  a {
    cursor: pointer;
    color: white;
  }

  a:hover {
    text-decoration: underline;
    background-color: #f5b44d;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 10px;
    align-items: center; /* Centra los enlaces en pantallas pequeñas */
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SobreMi = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 10px;
  gap: 20px;

  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 4px solid #f5b44d;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 5px;
    color: white;
  }

  h2 {
    margin: 0;
    color: #f5b44d;
  }

  p {
    margin: 0;
    padding-top: 10px;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

export const MoreInfo = styled.ul`
  list-style-type: none;
  margin-bottom: 60px;
  margin-top: 0;
  margin: auto;
  padding: 0;
  width: 62%;
  display: flex;
  gap: 10px;
  flex-direction: column;

  li {
    display: flex;
    align-items: center;
    gap: 15px;
    border-radius: 5px;
    color: white;

    h3 {
      margin: 0;
      margin-right: 10px;
    }
  }

  @media (max-width: 600px) {
    width: 100%;
    align-items: center; /* Centra los elementos de la lista */
  }
`;

export const StyledInput = styled.input`
  border: 0px transparent;
  background-color: transparent;
  color: white;
  font-family: "MyFont";
  width: 175px;
`;

export const StyledButton = styled.button`
  border: none;
  width: 50px;
  background-color: transparent;
  color: white;
  cursor: pointer;
  position: relative;

  svg {
    font-size: 1.5rem;
  }

  &:hover {
    background-color: #f5b44d;
  }

  &::after {
    content: "";
    position: absolute;
    top: -30px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #333;
    color: white;
    padding: 5px;
    border-radius: 5px;
    font-size: 0.8rem;
    white-space: nowrap;
    z-index: 10;
    opacity: 0;
  }

  &:hover::after {
    opacity: 1;
  }
`;

export const OpenCV = styled(StyledButton)`
  &:hover::after {
    content: "Ver CV";
  }
`;

export const SendButton = styled(StyledButton)`
  &:hover::after {
    content: "Enviar correo";
  }
`;

export const CopyButton = styled(StyledButton)`
  &:hover::after {
    content: "Copiar correo";
  }
`;

export const Social = styled.div`
  width: 80%;
  h2 {
    text-align: center;
    padding-left: 15px;
    color: #f5b44d;
    margin-bottom: 50px;
  }
  margin-top: 50px;
  margin-bottom: 100px;

  @media (max-width: 600px) {
    width: 100%; /* Ocupa todo el ancho disponible */
  }
`;

export const SocialRow = styled.div`
  margin-top: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 20px;
    align-items: center; /* Centra los elementos */
  }
`;

export const SocialContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  width: 175px;
  height: 50px;
  border-radius: 15px;
  gap: 10px;

  h3 {
    color: black;
  }
`;

export const SocialButton = styled.button`
  display: flex;
  width: 175px;
  height: 50px;
  border: 2px solid #f5b44d;
  border-radius: 15px;
  cursor: pointer;
  position: relative;

  svg {
    font-size: 1.5rem;
  }

  &:hover {
    background-color: #f5b44d;
    border: 2px solid white;
  }

  &::after {
    content: "";
    position: absolute;
    top: -30px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #333;
    color: white;
    padding: 5px;
    border-radius: 5px;
    font-size: 0.8rem;
    white-space: nowrap;
    z-index: 10;
    opacity: 0;
  }

  &:hover::after {
    opacity: 1;
  }
`;

export const OpenLinkedin = styled(SocialButton)`
  &:hover::after {
    content: "Ir a Linkedin";
  }
`;

export const OpenGithub = styled(SocialButton)`
  &:hover::after {
    content: "Ir a GitHub";
  }
`;

export const Proyectos = styled.div`
  width: 80%;
  margin-bottom: 50px;
  h2 {
    text-align: center;
    color: #f5b44d;
  }

  @media (max-width: 600px) {
    width: 100%;
    text-align: center;
  }
`;

export const Proyecto = styled.div`
  h3 {
    color: #f5b44d;
  }

  img {
    width: 350px;
    height: 300px;
    border: 2px solid #f5b44d;
    cursor: pointer;
    margin: 20px;
  }
`;
export const ProyectosRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 20px;
    align-items: center; /* Centra los elementos */
  }
`;

export const TecnologiasProyectoRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  gap: 15px;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 10px;
    align-items: center; /* Centra los elementos */
  }
`;

export const TecnologiaProyecto = styled.div`
  display: flex;
  border-radius: 15px;
  align-items: center;
  border: 1px solid #f5b44d;
  gap: 10px;
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 20px;

  p {
    font-size: 0.7rem;
  }
`;

export const Habilidades = styled.div`
  width: 80%;
  margin-bottom: 50px;

  h2 {
    text-align: center;
    color: #f5b44d;
  }

  h3 {
    text-align: left;
    color: #f5b44d;
  }

  @media (max-width: 600px) {
    width: 100%;
    text-align: center;
  }
`;

export const HabilidadesRow = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  flex-wrap: wrap;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 10px;
    align-items: center; /* Centra los elementos */
  }
`;

export const Habilidad = styled.div`
  display: flex;
  border-radius: 15px;
  align-items: center;
  border: 1px solid #f5b44d;
  gap: 10px;
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 20px;

  p {
    font-size: 1.4rem;
  }
`;

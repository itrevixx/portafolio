import styled from "styled-components";

export const Container = styled.div`
  width: 1024px;
  margin: auto;
  display: flex;
  flex-direction: column; /* Cambiado a columna para que los elementos se apilen */
  justify-content: center;
  align-items: center;
  background-color: rgba(11, 13, 43, 0.96);
`;

export const Header = styled.ul`
  list-style-type: none;
  padding: 10px 20px;
  display: flex;
  gap: 20px;
  margin-bottom: 50px; /* Separación inferior para alejar la lista de la imagen */

  a {
    cursor: pointer;
    color: white;
  }

  a:hover {
    text-decoration: underline;
    background-color: #f5b44d;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SobreMi = styled.div`
  display: flex;
  align-items: center; /* Alinea verticalmente la imagen y el h2 */
  padding: 10px; /* Espacio alrededor del contenido */
  border-radius: 10px; /* Opcional, para bordes redondeados */
  gap: 20px; /* Espacio entre la imagen y el h2 */

  img {
    width: 150px;
    height: 150px; /* Asegura que la imagen sea circular */
    border-radius: 50%; /* Bordes redondeados para la imagen */
    border: 4px solid #f5b44d;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 5px; /* Espacio entre el título y la descripción */
    color: white;
  }

  h2 {
    margin: 0; /* Elimina el margen predeterminado del título */
    color: #f5b44d;
  }

  p {
    margin: 0; /* Elimina el margen predeterminado del párrafo */
    padding-top: 10px; /* Espacio entre el título y el párrafo */
  }
`;

export const MoreInfo = styled.ul`
  list-style-type: none;
  margin-bottom: 60px;
  margin-top: 0;
  margin: auto;
  padding: 0; /* Elimina el padding predeterminado */
  width: 62%; /* Asegura que el contenedor ocupe todo el ancho disponible */
  display: flex;
  gap: 10px;
  flex-direction: column; /* Alinea los elementos en columna */

  li {
    display: flex;
    align-items: center; /* Alinea verticalmente el contenido */
    gap: 15px;
    border-radius: 5px; /* Bordes redondeados opcionales */
    color: white;

    h3 {
      margin: 0;
      margin-right: 10px; /* Espacio entre el título y el resto del contenido */
    }
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
  position: relative; /* Necesario para posicionar el tooltip */

  svg {
    font-size: 1.5rem; /* Ajusta el tamaño del icono */
  }

  &:hover {
    background-color: #f5b44d; /* Cambia el color al pasar el ratón */
  }

  /* Tooltip común, sin texto */
  &::after {
    content: ""; /* Este contenido se llenará con los estilos en el hover */
    position: absolute;
    top: -30px; /* Ajusta la posición del tooltip */
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
    opacity: 1; /* Muestra el tooltip al hacer hover */
  }
`;

export const OpenCV = styled(StyledButton)`
  &:hover::after {
    content: "Ver CV"; /* Texto del tooltip para el botón */
  }
`;

/* Botón para enviar correo */
export const SendButton = styled(StyledButton)`
  &:hover::after {
    content: "Enviar correo"; /* Texto del tooltip para el botón */
  }
`;

/* Botón para copiar */
export const CopyButton = styled(StyledButton)`
  &:hover::after {
    content: "Copiar correo"; /* Texto del tooltip para el segundo botón */
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
`;

export const SocialRow = styled.div`
  margin-top: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
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
    font-size: 1.5rem; /* Ajusta el tamaño del icono */
  }

  &:hover {
    background-color: #f5b44d; /* Cambia el color al pasar el ratón */
    border: 2px solid white;
  }

  /* Tooltip común, sin texto */
  &::after {
    content: ""; /* Este contenido se llenará con los estilos en el hover */
    position: absolute;
    top: -30px; /* Ajusta la posición del tooltip */
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
    opacity: 1; /* Muestra el tooltip al hacer hover */
  }
`;

export const OpenLinkedin = styled(SocialButton)`
  &:hover::after {
    content: "Ir a Linkedin"; /* Texto del tooltip para el botón */
  }
`;

export const OpenGithub = styled(SocialButton)`
  &:hover::after {
    content: "Ir a GitHub"; /* Texto del tooltip para el botón */
  }
`;

export const Proyectos = styled.div`
  width: 80%;
  margin-bottom: 50px;
  h2 {
    text-align: center;
    color: #f5b44d;
  }
`;

export const ProyectosRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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

export const TecnologiasProyectoRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  gap: 15px;
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
`;

export const HabilidadesRow = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  flex-wrap: wrap;
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

export const Recomendaciones = styled.div``;

export const RecomendacionesRow = styled.div``;

export const Recomendacion = styled.div``;

import { createGlobalStyle } from "styled-components";
import font from "../assets/batmfa__.ttf";
import race from "../assets/formula-1-race-car-digital-art-4k-wallpaper-uhdpaper.com-133@3@a.jpg";

const GlobalStyle = createGlobalStyle`
@font-face {
        font-family: myFont;
        src: url(${font});
    }
    body {
    font-family: 'myFont', sans-serif;
    background-image: url(${race});
    background-repeat: no-repeat;
    background-size: cover;
    color: white;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

    h2{
        color: #f5b44d;
        text-decoration: underline;
    }
    h3 {
    text-align: left;
    color: #f5b44d;
  }
`;

export default GlobalStyle;

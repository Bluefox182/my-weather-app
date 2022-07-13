import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-size: 1rem;
    overflow: hidden;
    
}
body{
    font-family: 'Montserrat', sans-serif;
    color: white;
    transition: all 0.4s ease-in-out;
    
}
`;

export default GlobalStyle;

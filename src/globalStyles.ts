import "antd/dist/antd.min.css";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

html, body, #root {
    height:100%;
    margin: 0;
    padding: 0;
}


* {
    outline: none;
}

`;

export default GlobalStyle;

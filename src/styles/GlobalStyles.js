import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`    
    body{
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        background: rgb(255,118,118);
        background: linear-gradient(90deg, rgba(255,118,118,1) 1%, rgba(255,54,247,1) 34%, rgba(176,97,254,1) 68%, rgba(0,117,165,1) 100%);
        margin: 0;
        padding: 0;
        background-repeat: no-repeat;
        background-size: cover;
        height: 100vh;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
}
` 
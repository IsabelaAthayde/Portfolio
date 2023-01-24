import { createGlobalStyle } from 'styled-components';


export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        font-size: 62.5%;
    }

    html {
        height: 100vh;
        box-shadow: inset 0px 4px 100px #131313;

        overflow: hidden;
        
        
    }
    
    body {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_DEFAULT};
        color: ${({ theme }) => theme.COLORS.WHITE};
        font-size: 1.6rem;


        height: 100vh;
        
        overflow-y: scroll;
        overflow-x: hidden;

        body, h1, h2, h3, h4, a, span, strong, p, li, div, section {
            font-family: 'Roboto Slab', sans-serif;
        }
        
        &::-webkit-scrollbar {
            width: 7px;
        }
        
        &::-webkit-scrollbar-track {
            background: #171717;
        }
        
        &::-webkit-scrollbar-thumb {
            background: ${({theme}) => theme.COLORS.BACKGROUND_DEFAULT};
            border-radius: 9999px;
        }
        

    }

    body, button, input, textarea, select {
        font-family: 'Roboto Slab', serif;
    }

    button, a {
        cursor: pointer;
    }

    a {
        text-decoration: none;
        list-style: none;
    }

`;
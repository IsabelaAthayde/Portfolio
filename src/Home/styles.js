import styled from "styled-components";

import bgHome from "../assets/bgHome.png";
import bubbles from "../assets/bubbles.png";


export const Container = styled.div`
    width: 100%;
    height: 100%;

    background-image: url(${bgHome});
    background-repeat: repeat-y;
    background-size: inherit;
    
    > main {
        overflow: hidden;

        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;

        position: relative;
        
        > nav {
        position: fixed;
        top: 3.3rem;
        left: clamp(.5rem, 10px + 5vw, 5.4rem);
        right: clamp(.5rem, 15px + 5vw, 5.4rem);

        z-index: 5;
        
        height: 5.5rem;
        padding: 1rem;

        background-color: ${({theme}) => theme.COLORS.NAV_TRANSPARENT};
        color: ${({theme}) => theme.COLORS.TEXT_DEFAULT};

        border: 1px solid #272727;
        border-radius: 10px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 0px 15px 5px rgba(62, 62, 62, 0.25);
        
        display: flex;
        align-items: center; 
        justify-content: space-evenly;

        @media (max-width: 377px) {
            left: 5px;
            right: 5px;
        }

        @media (min-width: 450px) {
            justify-content: space-between;
            padding: 1.3rem 2rem;
            
        }
        @media (min-width: 790px) {
            padding: 1rem 5rem;
        }
        @media (min-width: 1000px) {
            padding: 1rem 7rem;
        }

        ul:first-of-type {
            display: flex;
            align-items: center;
            gap: .8rem;
            

            @media (min-width: 450px) {
                gap: 4rem;
            }
            @media (min-width: 1000px) {
                gap: 9rem;
            }
        }

        @keyframes leftDown {
            0% {
            transform: scaleX(1);
            transform-origin: 0% 0%;
            }

            25% {
                transform: scaleX(0);
                transform-origin: 0% 0%;
            }

            50% {
                transform: scaleX(1);
                transform-origin: 100% 100%;
            }

            100% {
                transform: scaleX(0);
		        transform-origin: 100% 100%;
            }
        }

        ul:last-of-type {

            
                &:hover {
                    animation: leftDown 2s ease 0s 1 normal forwards;
                }
    
        }

        ul {
            height: 100%;
            svg {
                color: ${({theme}) => theme.COLORS.WHITE};
                cursor: pointer;
            }
        }

        ul li, ul li a {
            list-style: none;
            font-size: 2rem;
            color: ${({theme}) => theme.COLORS.TEXT_DEFAULT};
            font-family: 'Inter', sans-serif;

            &:hover {
            color: ${({theme}) => theme.COLORS.WHITE};
            cursor: pointer;
            }
        }

    }

        > div#home-container {
            height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 9rem;
            padding-top: 15rem;

            @media (min-width: 638px) {
                flex-direction: row;
                gap: 7rem;
                margin: 0;
            }
            @media (min-width: 880px) {
                gap: 15rem;
            }
            @media (min-width: 1100px) {
                gap: 18rem;
            }

            #info {
                margin-bottom: 5vh;
            }
        }


        #info h1 , #info p {
            min-width: 23.2rem;
            
        }

        #info h1 {
            font-size: 3rem;
            font-size: 8vw;
            font-weight: 800;

            margin-bottom: 4rem;


            @media (min-width: 528px) {
                font-size: 4.2rem;
            }
            @media (min-width: 830px) {
                font-size: 5rem;
            }
            @media (min-width: 1100px) {
                font-size: 6rem;

            }
        }

        p {
            color: ${({theme}) => theme.COLORS.TEXT_DEFAULT};
            font-size: 1.8rem;
            font-size: 4.4vw;
            @media (min-width: 528px) {
            font-size: 2.2rem;
                
            }
            
            @media (min-width: 1100px) {
                font-size: 3rem;
            }
        }

        

        #cv {
            width: 20rem;
            height: 20rem;
            display: grid;
            place-items: center;
            @media (min-width: 900px) {
                width: 28rem;
                height: 28rem;

            }


            > h2 {
                position: absolute;
                font-size: 4rem;
                font-weight: 900;
                z-index: 4;
                cursor: pointer;

                &:hover {
                    transform: scale(1.3);
                    transition: transform 1s ease 0s;
                }

                a {
                    color: ${({theme}) => theme.COLORS.WHITE};
                    text-decoration: none;

                    &:hover {
                        color: ${({theme}) => theme.COLORS.PURPLE_1};
                    }
                }
            }


            position: relative;
            .triangle {
                position: absolute;
                background-image: url("data:image/svg+xml,%3Csvg width='190' height='162' viewBox='0 0 190 162' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M95 1.98886L188.191 161H1.80854L95 1.98886Z' stroke='white'/%3E%3C/svg%3E%0A");
                background-size: contain;
                background-repeat: no-repeat;

                width: 100%;
                height: 100%;
                z-index: 1;

            }
            
            .normal {
                animation: Rotate 4s linear 0s infinite normal forwards;
            }

            .delay {
                animation: Rotate 4s linear 500ms infinite normal forwards;

            }

            
            .reverse_triangle {
                position: absolute;
                background-image: url("data:image/svg+xml,%3Csvg width='190' height='162' viewBox='0 0 190 162' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M95 1.98886L188.191 161H1.80854L95 1.98886Z' stroke='white'/%3E%3C/svg%3E%0A");
                background-size: contain;
                background-repeat: no-repeat;
                
                width: 100%;
                height: 100%;
            }
            
            
            .rev_normal {
                animation: Rotate 4s linear 0s infinite reverse forwards;
            }
            .rev_delay {
                animation: Rotate 4s linear 500ms infinite reverse forwards;

            }

        }
    }

    @keyframes Rotate {
        0% {
            transform: rotate(0);
        }

        100% {
            transform: rotate(360deg);
        }
    };
`;

export const Projects = styled.section`
    width: 100%;

    height: 100vh;
    min-height: 600px;

    @media (min-width: 790px) {
    width: 80vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12rem;
    }
    
    padding: 14.5rem 4.5rem 0;

    > #carousel-wrapper {
        max-width: 47rem;
        width: 100%;
        margin: 40px auto 0;
        @media (max-height: 626px) {
            margin: 0px auto 0;

        }
    }

    > h1 {
        text-align: center;
        margin: 2rem auto;
        width: fit-content;
        font-size: 3rem;
        font-family: 'Inter', sans-serif;

        @media (min-width: 790px) {
         margin: 0;
         display: grid;
         place-items: center;
         width: fit-content;
         height: fit-content;
        font-size: 4.5rem;

         #my {display: none}
         
         span {
            width: fit-content; 
            margin: 0;

            &:hover {
                color: ${({theme}) => theme.COLORS.PURPLE_1};
            }
         }
        }
    }

    > img {
        width: 100%;
        border-radius: 15px;
        margin-top: 2rem;

        object-fit: contain;
    }

    > p {
        width: 100%;
        height: 192px;
        margin: 1.5rem 0 2.3rem;
        color: white;
    }

    > #slide_bar {
        

        svg:first-of-type:not(footer svg), svg:last-of-type:not(footer svg)  {
            width: 50px;
            
            min-width: auto;
                min-height: auto;
            height: 100%;
            color: ${({theme}) => theme.COLORS.TEXT_DEFAULT};
           

            &:hover {
                color: ${({theme}) => theme.COLORS.WHITE};
            }
        }

        > footer {
            display: grid;
            grid-template-columns: 26px 26px 26px 26px 26px 26px 26px 26px 26px;
            gap: 1rem;
            
            width: 100%;
            height: 3rem;
            overflow: scroll;
            .slide {
                transform: translateX(-50px);
                transition: all 0.8s;
            }
            .purple {
                color: ${({theme}) => theme.COLORS.PURPLE_1};
            }
            > svg {
                width: 26px;
                height: 26px;
                min-width: auto;
                min-height: auto;

                color: ${({theme}) => theme.COLORS.TEXT_DEFAULT};
                
            }
        }

    }
`;

export const Contacts = styled.section`
    width: 100%;
    height: 100%;
    text-align: center;

    background-image: url(${bubbles});
    background-repeat: no-repeat;
    background-size: inherit;
    
    padding: 5rem 0 10rem;
    position: relative;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_DEFAULT};
    
    @media (max-height: 730px) {
        margin-top: 150px;
    }
    @media (min-width: 800px) {
        height: 100vh;
    }
    
    > h3 {
        margin: 5rem 0 2rem;
        font-size: 2.8rem;
        font-size: 5.7vw;

        background: ${({theme}) => theme.COLORS.HIGHLIGHT1};
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        
        @media (max-width: 415px) {
            font-size: 2.8rem;
        }
        @media (min-width: 970px) {
            font-size: 5rem;
        }
    }

    > h4 {
        font-size: 2rem;
        font-size: 4.6vw;

        margin-bottom: 8rem;
        letter-spacing: 0.8px;

        @media (max-width: 415px) {
            font-size: 2rem;
        }
        @media (min-width: 970px) {
            font-size: 4rem;
        }

        span {
            background: ${({theme}) => theme.COLORS.HIGHLIGHT2};
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            
        }
    }

    > #bubble_wrapper {
        width: 100%;
        max-width: 458px;
        height: fit-content;
        
        padding: 0 3.5rem;
        @media (min-width: 450px) {
            margin: 0 auto;
        }

        @media (min-width: 638px) {
            display: grid;
            grid-template-areas: 
            "a b"
            "c d";
            gap: 4rem;
        }

        @media (min-width: 800px) {
            height: 23.8rem;
            width: 100%;

            padding: 0;

            display: flex;
            justify-content: center;
            gap: 4rem;
        }
        
        .bubble {
            z-index: 2;
            display: grid;
            place-items: center;

            background-color: ${({ theme }) => theme.COLORS.BACKGROUND_DEFAULT};

            width: clamp(13rem, 8rem + 10vw, 15.8rem);
            height: clamp(13rem, 8rem + 10vw, 15.8rem);
            
            border-radius: 9999px;
            border: 1px solid gray;

            position: relative;

            @keyframes scaleUp {
                0% {
                    transform: scale(0.06);
                }

                100% {
                    transform: scale(1.16);
                }
            }

            &:hover {
                background-color: transparent; 
                a img {
                    display: block;
                    animation: scaleUp 0.5s ease 0s 1 normal forwards;
                }
                cursor: pointer;
            }
           
        > a {
            display: grid;
            place-items: center;

            text-decoration: none;
            color: ${({theme}) => theme.COLORS.WHITE};
            width: 100%;
            height: 100%;
            
            > img {
                position: absolute;
                z-index: -1;
                display: none;
                width: 13rem;
                height: 13rem;
            }
            }
        }
        

        .align {
            display: flex;
            flex-direction: column;
            justify-content: center;
            @media (min-width: 638px) {
                width: 20rem;
                flex-direction: row;
                height: fit-content;
            }

            @media (min-width: 800px) {
                flex-direction: row;
                height: 25rem;
            }
        }

        .b, .c {
            @media (min-width: 638px) {
                justify-content: start;
            }
        }
        .a, .d {
            @media (min-width: 638px) {
                justify-content: end;
            }
        }
        
        
        .a, .c {
            align-items: flex-end;
            
            @media (min-width: 800px) {
            align-items: flex-start;

            }
            
        }

        .b, .d {
            align-items: flex-start;
            @media (min-width: 800px) {
            align-items: flex-end;

            }
        }
    }
`;


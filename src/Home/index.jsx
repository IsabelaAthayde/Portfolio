import { RiMoonLine, RiSunLine } from 'react-icons/ri';

import { MultipleBubble, BubbleLeft, BubbleRight } from '../components/Bubble';
import { OpenTag, CloseTag } from "../components/openCloseTag";

import scale from "../assets/scale.svg";


import { Container, Projects, Contacts} from "./styles";

import Carousel from "../components/Carousel/index"

export function Home() {

    return (
        <Container>
            <main>
                <nav>
                    <ul>
                        <li><a href='#home-container'>Home</a></li>
                        <li><a href='#projects'>Projetos</a></li>
                        <li><a href='#contacts'>Contatos</a></li>
                    </ul>
                    <ul>
                        <RiMoonLine size={30} />
                    </ul>
                </nav>
                <div id='home-container'>
                    <section id="info">
                        <h1>Isabela Athayde</h1>
                        <p>Web Developer |</p>
                        <p>React | Nodejs | JavaScript</p>
                        <p>HTML | CSS</p> 
                    </section>
                    
                    <section id="cv">
                        <h2>CV</h2>
                        <div className="triangle normal"></div>
                        <div className="triangle delay"></div>
                        <div className="reverse_triangle rev_normal"></div>
                        <div className="reverse_triangle rev_delay"></div>
                        <div id="ring"></div>

                    </section>
                </div>
                <Projects id='projects'>
                    <h1>
                    <span id="my">Meus </span> 
                    <span>P</span>
                    <span>r</span>
                    <span>o</span>
                    <span>j</span>
                    <span>e</span>
                    <span>t</span>
                    <span>o</span>
                    <span>s</span>
                    </h1>
                    <section id="carousel-wrapper">
                        <Carousel></Carousel>
                    </section>
                </Projects>
                <Contacts id='contacts'>

                    <h3>Gostou do que viu?</h3>
                    <h4>Entre em <span>contato comigo</span> !</h4>
                    <section id="bubble_wrapper">
                        <div className='align a'>
                            <div className="bubble">
                                <a href="https://www.linkedin.com/in/isabela-de-oliveira-athayde-41730a24b/" target="_blank">
                                    <OpenTag />Linkedin<img src={scale} alt="" /><CloseTag />
                                </a>
                            </div>
                        </div>
                        <div className='align b'>
                            <div className="bubble">
                                <a href="https://www.linkedin.com/in/isabela-de-oliveira-athayde-41730a24b/" target="_blank">
                                    <OpenTag />GitHub<img src={scale} alt="" /><CloseTag />
                                </a>
                            </div>
                        </div>
                        <div className='align c'>
                            <div className="bubble">
                                <a href="https://www.linkedin.com/in/isabela-de-oliveira-athayde-41730a24b/" target="_blank">
                                    <OpenTag />Email<img src={scale} alt="" /><CloseTag />
                                </a>
                            </div>
                        </div>
                        <div className='align d'>
                            <div className="bubble">
                                <a href="https://www.linkedin.com/in/isabela-de-oliveira-athayde-41730a24b/" target="_blank">
                                <OpenTag />Instagram<img src={scale} alt="" /><CloseTag />
                                </a>
                            </div>
                        </div>
                    </section>

                </Contacts>
                    
            </main>
           
        </Container>
    )
}
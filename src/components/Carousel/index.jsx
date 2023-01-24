import { Component } from "react";

import Slider from "react-slick";

import { Container } from "./styles.js";

import { GiSeaStar } from 'react-icons/gi';
import { RiArrowLeftCircleFill, RiArrowRightCircleFill } from 'react-icons/ri';

import project1 from "../../assets/projects/movies.PNG";
import project2 from "../../assets/projects/focusTimer.PNG";
import project3 from "../../assets/projects/icecream.png";
import project4 from "../../assets/projects/form.PNG";
import project5 from "../../assets/projects/adivinhar.PNG";
import project6 from "../../assets/projects/calc.PNG";
import project7 from "../../assets/projects/shop1.PNG";
import project8 from "../../assets/projects/slider.PNG";
import project9 from "../../assets/projects/link.PNG";

const images = [
  {name: project1, id: "1",text: "Lista de Filmes Favoritos", link: "https://rocketmovielist.netlify.app/"},
  {name: project2, id: "2",text: "Temporizador para foco", link: "https://to-focus-timer.netlify.app/"},
  {name: project3, id: "3",text: "Loja de Gelados", link: "https://ices-shop.netlify.app/"},
  {name: project4, id: "4",text: "Formulário", link: "https://form-games.netlify.app/"},
  {name: project5, id: "5",text: "Jogo de Adivinhação", link: "https://guessgame-site.netlify.app/"},
  {name: project6, id: "6",text: "Calculadora", link: "https://js-basic-calculate.netlify.app/"},
  {name: project7, id: "7",text: "Loja de Action Figure", link: "https://miku-figure-shop.netlify.app/"},
  {name: project8, id: "8",text: "Slider", link: "https://slider-kdrama-favorites.netlify.app/"},
  {name: project9, id: "9",text: "Minha LinkTree", link: "https://isabelaathayde.github.io/isLinks/"}
];


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
      <RiArrowRightCircleFill className={className} style={{...style}} onClick={onClick}/>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
      
      <RiArrowLeftCircleFill className={className} style={{...style}} onClick={onClick}/>
  );
}


class Carousel extends Component {
    render() {
      const settings = {
        dots: true,
        arrows: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        className: "slides",
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        appendDots: dots => (
            <ul className="slick-dots">{dots}</ul>
        ),
        customPaging: i => (
            <GiSeaStar style={{zIndex: "3"}}/>
        )
      };
  
      return (
      <Container>
            <div id="message">
              <h1>Clique na foto para ver o Projeto</h1>
            </div>
        <Slider {...settings} className="sliderwrapper">
           { images.map((image) => (
              <a href={image.link} key={image.id + image.name} target="_blank">
                <img
                  src={image.name}
                  key={image.id}
                /> 
              </a>
            ))
          }
           
        </Slider> 
        </Container>
      );
    }
  }

  export default Carousel;
  
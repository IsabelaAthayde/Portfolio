import { Component } from "react";

import Slider from "react-slick";

import { Container } from "./styles.js";

import { GiSeaStar } from 'react-icons/gi';
import { RiArrowLeftCircleFill, RiArrowRightCircleFill } from 'react-icons/ri';

import project1 from "../../assets/projects/movies.PNG";
import project2 from "../../assets/projects/focusTimer.PNG";
import project3 from "../../assets/projects/icecream.png";
import project4 from "../../assets/projects/adivinhar.PNG";
import project5 from "../../assets/projects/form.PNG";
import project6 from "../../assets/projects/calc.PNG";
import project7 from "../../assets/projects/shop1.PNG";
import project8 from "../../assets/projects/slider.PNG";
import project9 from "../../assets/projects/link.PNG";

const images = [
  {name: project1, id: "1",text: "Lista de Filmes Favoritos"},
  {name: project2, id: "2",text: "Temporizador para foco"},
  {name: project3, id: "3",text: "Slider"},
  {name: project4, id: "4",text: "Loja de Gelados"},
  {name: project5, id: "5",text: "Jogo de Adivinhação"},
  {name: project6, id: "6",text: "Formulário"},
  {name: project7, id: "7",text: "Calculadora"},
  {name: project8, id: "8",text: "Loja de Action Figure"},
  {name: project9, id: "9",text: "Minha LinkTree"}
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
        <Slider {...settings} className="sliderwrapper">
          
           { images.map((image) => (
                <img
                  src={image.name}
                  key={image.id}
                /> 
            ))
          }
           
        </Slider> 
        </Container>
      );
    }
  }

  export default Carousel;
  
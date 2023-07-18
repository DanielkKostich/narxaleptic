import React from 'react';
import { Jumbotron, Container, } from 'react-bootstrap';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import camaroImage from '../images/camaro.jpg';
import modImage from '../images/mod.jpg';
import dakota from '../images/dakota.jpg';
import midget from '../images/midget.jpg';
import s10 from '../images/s-10.jpg';
import '../App.css'; 

function Gallery() {
  return (
    <Jumbotron fluid className=" contact home">
      <Container>
        <h1>Our previous work!</h1>
        <p>We specialize in building cars.</p>
        
      </Container>
      <div className="carousel-container">
        <Carousel showArrows={true} showStatus={false} showIndicators={false} showThumbs={false}>
          <div>
            <img
              className="carousel-image"
              src={camaroImage}
              alt="Camaro"
            />
            <p className="legend">1967 Camaro</p>
          </div>
          <div>
            <img
              className="carousel-image"
              src={modImage}
              alt="Red corvette"
            />
            <p className="legend">Corvette</p>
          </div>
          <div>
            <img
              className="carousel-image"
              src={dakota}
              alt="A bee"
            />
            <p className="legend">Dakota Exoskeleton</p>
          </div>
          <div>
            <img
              className="carousel-image"
              src={midget}
              alt="A bee"
            />
            <p className="legend">1966 Midget</p>
          </div>
          <div>
            <img
              className="carousel-image"
              src={s10}
              alt="A bee"
            />
            <p className="legend">1993 S-10</p>
          </div>
        </Carousel>
      </div>
    </Jumbotron>
  );
}

export default Gallery;

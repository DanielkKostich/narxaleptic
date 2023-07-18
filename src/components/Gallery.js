import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import camaroImage from '../images/camaro.jpg';
import modImage from '../images/mod.jpg';
import dakota from '../images/dakota.jpg';
import midget from '../images/midget.jpg';
import s10 from '../images/s-10.jpg';
import '../App.css';

function Gallery() {
  const renderCarouselItem = (imageSrc, altText, legend) => (
    <div>
      <img className="carousel-image" src={imageSrc} alt={altText} />
      <p className="legend">{legend}</p>
    </div>
  );

  return (
    <Jumbotron fluid className="contact home">
      <Container>
        <h1>Our Previous Work</h1>
        <p>We specialize in building cars.</p>
      </Container>
      <div className="carousel-container">
        <Carousel
          showArrows={true}
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
          autoPlay={true}
          infiniteLoop={true}
          dynamicHeight={false}
          className="custom-carousel"
        >
          {renderCarouselItem(camaroImage, 'Camaro', '1967 Camaro')}
          {renderCarouselItem(modImage, 'Red Corvette', 'Corvette')}
          {renderCarouselItem(dakota, 'A bee', 'Dakota Exoskeleton')}
          {renderCarouselItem(midget, 'A bee', '1966 Midget')}
          {renderCarouselItem(s10, 'A bee', '1993 S-10')}
        </Carousel>
      </div>
    </Jumbotron>
  );
}

export default Gallery;

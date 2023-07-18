import React from 'react';
import { Jumbotron, Container, Button } from 'react-bootstrap';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import camaroImage from '../images/camaro.jpg';
import modImage from '../images/mod.jpg';
import bussImage from '../images/buss 3.jpg';
import './Gallery.css'; // Import the custom CSS file

function Gallery() {
  return (
    <Jumbotron fluid className="bg-dark text-white">
      <Container>
        <h1>Welcome to Narxaleptic</h1>
        <p>We specialize in building cars.</p>
        <Button variant="primary">Learn More</Button>
      </Container>
      <div className="carousel-container">
        <Carousel showArrows={true} showStatus={false} showIndicators={false} showThumbs={false}>
          <div>
            <img
              className="carousel-image"
              src={camaroImage}
              alt="Camaro"
            />
            <p className="legend">Image 1</p>
          </div>
          <div>
            <img
              className="carousel-image"
              src={modImage}
              alt="Red corvette"
            />
            <p className="legend">Image 2</p>
          </div>
          <div>
            <img
              className="carousel-image"
              src={bussImage}
              alt="A bee"
            />
            <p className="legend">Image 3</p>
          </div>
        </Carousel>
      </div>
    </Jumbotron>
  );
}

export default Gallery;

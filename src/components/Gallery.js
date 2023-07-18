import React from 'react';
import image1 from '../images/camaro.jpg';
import image2 from '../images/mod.jpg';
import image3 from '../images/midget.jpg';
import image4 from '../images/dakota.jpg';
import image5 from '../images/s-10.jpg';
const images = [image1, image2,image3,image4,image5];

function Gallery() {
  return (
    <div className="gallery">
      <h2 className="header">Gallery:</h2>
      <div className="image-container">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Car ${index + 1}`}
            className="gallery-image"
          />
        ))}
      </div>
    </div>
  );
}

export default Gallery;

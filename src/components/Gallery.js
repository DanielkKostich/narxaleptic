import React from 'react';
import image1 from '../images/camaro.jpg';
import image2 from '../images/mod.jpg';

const images = [image1, image2];

function Gallery() {
  return (
    <div className="gallery">
      <h2 className="header">Gallery:</h2>
      <div>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Car ${index + 1}`}
            style={{ maxWidth: 200, maxHeight: 200 }}
          />
        ))}
      </div>
    </div>
  );
}

export default Gallery;
